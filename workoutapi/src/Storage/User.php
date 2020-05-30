<?php
namespace App\Storage;

class User
{
    protected static $dbh;

    public function __construct()
    {
        self::$dbh = DB::getDB();
    }

    public function insert(\App\Model\User $user)
    {
        $sql = "INSERT INTO users (name)
                VALUES (:name)";
        $data = [
            ':name' => $user->name ?? ""
        ];
        self::$dbh->execQuery($sql, $data);
        $user->id = self::$dbh->lastInsertId();
        return $user; // TODO.... what. does this make any sense? should it return the whole thing? i dunnoooo
    }
}
