<?php
// TODO - swiped this from my mtg stuff. there are some things to fix...maybe. lol
namespace App\Storage;

class DB {

	protected static $db;

	public static function getDB() {
		if (!isset(self::$db)) {
			$dir = 'sqlite:'.__DIR__.'/../../workout.db';
			self::$db = new EnhancedPDO($dir) or die("cannot open the database");
			self::$db->setAttribute( \PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION );
		}
		return self::$db;
	}
}
