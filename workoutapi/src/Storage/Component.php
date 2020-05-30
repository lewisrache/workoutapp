<?php
namespace App\Storage;

class Component
{
    protected static $dbh;

    public function __construct()
    {
        self::$dbh = DB::getDB();
    }

    public function insert(\App\Model\Component $component)
    {
        $sql = "INSERT INTO components (name, workout_id, user_id, exercise_id, data)
                VALUES (:name, :workout_id, :user_id, :exercise_id, :data)";
        $data = [
            ':name' => $component->name ?? "",
            ':workout_id' => $component->workout_id ?? "",
            ':user_id' => $component->user_id ?? "",
            ':exercise_id' => $component->exercise_id ?? "",
            ':data' => $component->data ?? ""
        ];
        self::$dbh->execQuery($sql, $data);
        $component->id = self::$dbh->lastInsertId();
        return $component; // TODO.... what. does this make any sense? should it return the whole thing? i dunnoooo
    }
}
