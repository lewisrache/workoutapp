<?php

namespace App\Middle;

class Program extends Base
{
    public function __construct()
    {
        parent::__construct(new \App\Storage\Program());
    }
// TODO - everything needs to be updated for Exercises
    protected function transformToModel($data)
    {
        $program = new \App\Model\Program();
        $program->name = $data->programName;
        $program->user_id = $data->user_id;
        // TODO - exercises
        return $program;
    }

    public function fetchAll(int $userId)
    {
        $fetchedPrograms = $this->storage->fetchAll($userId);
        // TODO - transformation?
        return $fetchedPrograms;
    }

    public function fetchExercises(int $programId)
    {
        $fetchedExercises = $this->storage->fetchExercises($programId);
        // TODO - transformation?
        return $fetchedExercises;
    }
}
