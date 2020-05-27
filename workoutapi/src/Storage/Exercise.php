<?php
namespace App\Storage;

class Exercise
{
    protected static $dbh;

    public function __construct()
    {
        self::$dbh = DB::getDB();
    }

    public function insert(\App\Model\Exercise $exercise)
    {
        $sql = "INSERT INTO exerciseRecords (name, weight, reps, sets, time)
                VALUES (:name, :weight, :reps, :sets, :time)";
        $data = [
            ':name' => $exercise->name ?? "",
            ':weight' => $exercise->weight ?? "",
            ':reps' => $exercise->reps ?? "",
            ':sets' => $exercise->sets ?? "",
            ':time' => $exercise->time ?? ""
        ];
        self::$dbh->execQuery($sql, $data);
        $exercise->id = self::$dbh->lastInsertId();
        return $exercise; // TODO.... what. does this make any sense? should it return the whole thing? i dunnoooo
    }
}
