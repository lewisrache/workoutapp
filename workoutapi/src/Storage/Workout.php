<?php
namespace App\Storage;

class Workout
{
    protected static $dbh;

    public function __construct()
    {
        self::$dbh = DB::getDB();
    }

    public function insert(\App\Model\Workout $workout)
    {
        $sql = "INSERT INTO workouts (user_id, program_id)
                VALUES (:user_id, :program_id)";
        $data = [
            ':user_id' => $workout->user_id ?? "",
            ':program_id' => $workout->program_id ?? ""
        ];
        self::$dbh->execQuery($sql, $data);
        $workout->id = self::$dbh->lastInsertId();
        return $workout; // TODO.... what. does this make any sense? should it return the whole thing? i dunnoooo
    }

// TODO - come back to this -- can this be abstracted out?
    /**
     * Update the given field=>value pairs for the id given
     * @param  int    $id           - id referencing the entity
     * @param  array  $updateValues [description]
     * @return [type]               [description]
     */
    public function update(int $id, array $updateValues)
    {
        // TODO - validation and security around $updateValues
        $this->validate($updateValues);
        $data = [
            ':id' => $id
        ];
        $setClauseValues = [];
        foreach ($updateValues as $field => $value) {
            if ($this->specialDateCase($field, $value)) {
                $setClauseValues[] = "$field = $value";
            } else {
                $setClauseValues[] = "$field = :$field";
                $data[":$field"] = $value;
            }
        }
        $setClause = implode(',', $setClauseValues);
        $sql = "UPDATE workouts
                SET $setClause
                WHERE id = :id";
        $result = self::$dbh->execQuery($sql, $data);
        return true; // TODO
    }

    /**
     * Function to determine if this field-value pairing is a special case
     * 2020-06-05: date_completed = CURRENT_TIMESTAMP is the only case currently
     * @param  string $field - the field in question
     * @param  string $value - the value in question
     * @return bool          - true if the field and value are allowed to be treated as is, false otherwise
     */
    protected function specialDateCase($field, $value)
    {
        if (in_array($field, ['date_completed']) &&
            in_array($value, ['CURRENT_TIMESTAMP'])) {
            return true;
        }
        return false;
    }

    protected function validate(array $fieldValues)
    {
        // stub - will throw? eventually if invalid
        return null;
    }
}
