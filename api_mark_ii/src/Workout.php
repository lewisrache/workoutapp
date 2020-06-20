<?php declare(strict_types=1);

final class Workout
{
    private $program;
    private function __construct($program)
    {
        $this->program = $program;
    }
    public static function fromProgram(Program $program): Workout
    {
        return new self($program);
    }
    public function getName(): string
    {
        return $this->program->getName();
    }
}
