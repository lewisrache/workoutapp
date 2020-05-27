<?php
// TODO - swiped this from my mtg stuff. there are some things to fix...maybe
namespace App\Storage;

class EnhancedPDO extends \PDO {

	public function execQuery($query, $data) {

		$stmt = $this->prepare($query);
		if (!$stmt->execute($data)) {
			throw new \Exception("failure to execute query");
		}

		return $stmt->fetchAll();

	}

}
