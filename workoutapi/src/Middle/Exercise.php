<?php

namespace App\Middle;

class Exercise extends Base
{
    public function __construct()
    {
        parent::__construct(new \App\Storage\Exercise());
    }
// TODO - everything needs to be updated for Exercises
    protected function transformToModel($data)
    {
        $exercise = new \App\Model\Exercise();
        $exercise->name = $data->exerciseName; // TODO - do i like that the name is called this?
        $exercise->weight = $data->weight;
        $exercise->reps = $data->reps;
        $exercise->sets = $data->sets;
        return $exercise;
    }
}
