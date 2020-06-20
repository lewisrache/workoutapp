<?php declare(strict_types=1);

final class Workout
{
    private $program;
    private $components;
    private function __construct($program)
    {
        $this->program = $program;
        $this->components = $this->cloneExercises(...$program->getExercises());
    }
    public static function fromProgram(Program $program): Workout
    {
        return new self($program);
    }
    public function getName(): string
    {
        return $this->program->getName();
    }
    public function getComponents(): array
    {
        return $this->components;
    }

    private function cloneExercises(Exercise ...$exercises): array
    {
        $components = [];
        foreach ($exercises as $exercise) {
            $components[] = Component::fromExercise($exercise);
        }
        return $components;
    }
}
