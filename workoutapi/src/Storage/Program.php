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
}
