<?php

namespace App\Middle;

class Workout extends Base
{
    public function __construct()
    {
        parent::__construct(new \App\Storage\Workout());
    }
// TODO - everything needs to be updated for Exercises
    protected function transformToModel($data)
    {
        $workout = new \App\Model\Workout();
        $workout->user_id = $data->user_id; // TODO - do i like that the name is called this?
        $workout->program_id = $data->program_id;
        return $workout;
    }
}
