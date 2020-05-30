<?php

namespace App\Middle;

class User extends Base
{
    public function __construct()
    {
        parent::__construct(new \App\Storage\User());
    }
// TODO - everything needs to be updated for Exercises
    protected function transformToModel($data)
    {
        $user = new \App\Model\User();
        $user->name = $data->userName;
        return $user;
    }
}
