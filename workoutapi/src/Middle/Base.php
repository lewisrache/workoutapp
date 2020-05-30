<?php

namespace App\Middle;

abstract class Base
{
    protected $storage; // something really weirds me out here
    // TODO - mega restructuring i'm sure.
    public function __construct($storage)
    {
        $this->storage = $storage;
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

        $transformedModel = $this->transformToModel($data);
        $model = $this->storage->insert($transformedModel);
        return $model; // ???????
    }

    // ***** should the following functions be in another file? ******

    protected abstract function transformToModel($data);
}
