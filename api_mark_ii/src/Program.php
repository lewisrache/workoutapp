<?php declare(strict_types=1);

final class Program
{
    private $name;
    private $exercises;
    private $workouts;
    private function __construct(string $name, Exercise ...$exercises)
    {
        $this->name = $name;
        $this->exercises = $exercises;
        $this->workouts = [];
    }
    public static function create(string $name, Exercise ...$exercises): Program
    {
        return new self($name, ...$exercises);
    }
    public function getExercises(): array
    {
        return $this->exercises;
    }
    public function getName(): string
    {
        return $this->name;
    }
    public function spawnWorkout(): Workout
    {
        $workout = Workout::fromProgram($this);
        $this->workouts[] = $workout;
        return $workout;
    }
    public function getWorkoutList(): array
    {
        return $this->workouts;
    }
}
