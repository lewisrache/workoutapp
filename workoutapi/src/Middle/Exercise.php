<?php

namespace App\Middle;

class Exercise
{
    protected $storage; // something really weirds me out here
    // TODO - mega restructuring i'm sure.
    public function __construct()
    {
        $this->storage = new \App\Storage\Exercise();
    }

    public function getAll()
    {

    }

    public function record($data)
    {
        // TODO i feel ......wrong about everything.

        // TODO - validation? possibly happens before now? no.... probably now?? unsure.

        // TODO - eventual piping would be ...
        // - transform into Exercise Model
        // - pass transformation into storage layer

        $exercise = $this->transformToModel($data);
        $exercise = $this->storage->insert($exercise);
        return $exercise; // ???????
    }

    // ***** should the following functions be in another file? ******

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
