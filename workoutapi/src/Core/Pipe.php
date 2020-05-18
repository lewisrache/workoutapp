<?php

namespace App\Core;

class Pipe
{
	public static function pipe(...$steps)
	{
		foreach ($steps as $step) {
			// TODO - there was something about the error one... so uh... basically this isn't very robust.
			// TODO - also we should be testing this before we go any further...
			list($class, $method) = $step;
			$result = $class->$method(); // TODO - uhh... where do the request come from?
			if (ok($result)) {
				//...
			}
		}
	}
}
