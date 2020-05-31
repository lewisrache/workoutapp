<?php

namespace App\Middle;

class Component extends Base
{
    public function __construct()
    {
        parent::__construct(new \App\Storage\Component());
    }
// TODO - everything needs to be updated for Exercises
    protected function transformToModel($data)
    {
        $component = new \App\Model\Component();
        $component->name = $data->componentName ?? "";
        $component->workout_id = $data->workout_id;
        $component->user_id = $data->user_id;
        $component->exercise_id = $data->exercise_id;
        $component->data = json_encode($data->data);
        return $component;
    }
}
