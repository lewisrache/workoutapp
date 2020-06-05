<?php
namespace App\Storage;
// TODO - for all these storage files - if we end up caching or w/e, getting and returning is a good way to prime the cache.
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

    /**
     * Get a user by their username
     * @param string $username - name to search by
     * @return \App\Model\User - the user model describing the user
     */
    public function getByUsername(string $username)
    {
        // TODO - validation?
        // TODO - uniqueness on username
        $sql = "SELECT * FROM users WHERE name = :name";
        $data = [
            ':name' => $username
        ];
        $result = self::$dbh->execQuery($sql, $data);
        if (count($result) !== 1) {
            // TODO - throw something maybe i dunno, be better.
            return;
        }
        $user = new \App\Model\User();
        $user->name = $result[0]['name'];
        $user->id = $result[0]['id'];
        return $user;
    }
}
