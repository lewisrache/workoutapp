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
}
