<?php

/*
Runonce to set up the db. Currently, queries written for SQLite3.
If a different database structure is used, this script will need to be updated.
*/

require_once(__DIR__ . "/Storage/DB.php");
require_once(__DIR__ . "/Storage/EnhancedPDO.php");

$db = \App\Storage\DB::getDB();

// Create user table
// TODO - eventually need to figure out security
$sql = "CREATE TABLE users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name
        )";
$db->execQuery($sql);

// Create program table (a program is a predefined workout)
// TODO - should programs be per user, or no? i guess copying them to other users is easy enough.
$sql = "CREATE TABLE programs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            name,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )";
$db->execQuery($sql);

// Create workout table (a workout is a specific instance)
// id, user_id, date, program_id?
$sql = "CREATE TABLE workouts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            date TEXT DEFAULT CURRENT_TIMESTAMP,
            program_id DEFAULT NULL,
            FOREIGN KEY(user_id) REFERENCES users(id),
            FOREIGN KEY(program_id) REFERENCES programs(id)
        )";
$db->execQuery($sql);

// create exercise table (list of pre-recorded exercises, eg Squats. )
// exercises have a name and a space in which notes about the exercise can be stored.
$sql = "CREATE TABLE exercises(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name,
            notes
        )";
$db->execQuery($sql);

// create component table (specific workout component, eg 5x5 135lb squats)
// id, user_id, exercise_id? (name, currently.), data (json of reps sets weight time whatever else.
//  which means calculation stuff will be more complicated but that's a problem for later so whatever)
// TODO - components should have a date associated as well. because individual components could be done without a fully recorded workout.
$sql = "CREATE TABLE components(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            name DEFAULT NULL,
            workout_id INTEGER,
            exercise_id INTEGER DEFAULT NULL,
            date TEXT DEFAULT CURRENT_TIMESTAMP,
            data,
            FOREIGN KEY(user_id) REFERENCES users(id),
            FOREIGN KEY(workout_id) REFERENCES workouts(id),
            FOREIGN KEY(exercise_id) REFERENCES exercises(id)
        )";
$db->execQuery($sql);

// create user to program table
// TODO - only if programs can be shared. can programs be shared? what's easier??
// TODO - for now, ignoring this.

// create program to exercise table
// TODO - how are we dealing with #reps/sets and weights for the program?
$sql = "CREATE TABLE program_to_exercises(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            program_id INTEGER,
            exercise_id INTEGER,
            FOREIGN KEY(program_id) REFERENCES programs(id),
            FOREIGN KEY(exercise_id) REFERENCES exercises(id)
        )";
$db->execQuery($sql);
