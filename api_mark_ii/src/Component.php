<?php declare(strict_types=1);

final class Component
{
    private $exercise;
    private function __construct($exercise)
    {
        $this->exercise = $exercise;
    }
    public static function fromExercise(Exercise $exercise): Component
    {
        return new self($exercise);
    }
    public function getName(): string
    {
        return $this->exercise->getName();
    }
}
