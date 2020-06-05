<?php
namespace App\Storage;

class Program
{
    protected static $dbh;

    public function __construct()
    {
        self::$dbh = DB::getDB();
    }

    public function insert(\App\Model\Program $program)
    {
        $sql = "INSERT INTO programs (name, user_id)
                VALUES (:name, :user_id)";
        $data = [
            ':name' => $program->name ?? "",
            ':user_id' => $program->user_id ?? ""
        ];
        self::$dbh->execQuery($sql, $data);
        $program->id = self::$dbh->lastInsertId();
        return $program; // TODO.... what. does this make any sense? should it return the whole thing? i dunnoooo
    }
    // TODO - adding exercises

    public function fetchAll(int $userId)
    {
        $sql = "SELECT p.id, p.name, w.id as currentWorkoutId
                FROM programs p
                LEFT JOIN workouts w ON (w.program_id = p.id AND w.date_completed IS NULL)
                WHERE p.user_id = :user_id";
        $data = [
            ':user_id' => $userId
        ];
        $result = self::$dbh->execQuery($sql, $data);
        // TODO - ?
        return $result;
    }

    public function fetchExercises(int $programId)
    {
        $sql = "SELECT e.name, e.id
                FROM program_to_exercises p2e, exercises e
                WHERE p2e.exercise_id = e.id
                AND p2e.program_id = :program_id";
        $data = [
            ':program_id' => $programId
        ];
        $result = self::$dbh->execQuery($sql, $data);
        error_log(json_encode($result));
        return $result;
    }
}
