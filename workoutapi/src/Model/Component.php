<?php

namespace App\Model;

class Component
{
    public $name; // optional; mostly an alt to exercise id
    public $workout_id; // optional, technically.
    public $user_id;
    public $exercise_id; // optional
    public $date; // readonly for now.
    public $data; // JSON object. TODO - should it have its own model????
}
