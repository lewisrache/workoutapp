<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class WorkoutTest extends TestCase
{
    public function testCreateWorkoutFromProgram(): void
    {
        $program = Program::create('programname', ...[Exercise::fromString('exercisename')]);
        $this->assertInstanceOf(
            Workout::class,
            Workout::fromProgram($program)
        );
    }
}
