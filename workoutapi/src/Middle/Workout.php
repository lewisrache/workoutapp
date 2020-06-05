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
        $workout->user_id = $data->userId; // TODO - do i like that the name is called this?
        $workout->program_id = $data->programId;
        return $workout;
    }

    /**
     * call to complete the workout
     * @param  int    $workoutId - workout being completed
     * @return ???
     */
    public function complete(int $workoutId)
    {
        return $this->storage->update($workoutId, ['date_completed' => 'CURRENT_TIMESTAMP']);
    }
}
