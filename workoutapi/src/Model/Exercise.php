<?php

namespace App\Model;

class Exercise
{
    public $name;
    public $weight;
    public $reps;
    public $sets;
    public $time;
    public $id;
    // TODO - time / distance / whatever other measures may be applicable to different types of exercises
}

/*
// TODO: update to be this instead
// create exercise table (list of pre-recorded exercises, eg Squats. )
// exercises have a name and a space in which notes about the exercise can be stored.
$sql = "CREATE TABLE exercises(
            id PRIMARY KEY,
            name,
            notes
        )";
