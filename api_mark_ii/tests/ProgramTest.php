<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class ProgramTest extends TestCase
{
    public function testCreateProgramFromExerciseList(): void
    {
        $exercises = [
            Exercise::fromString("exercise1"),
            Exercise::fromString("exercise2")
        ];
        $this->assertInstanceOf(
            Program::class,
            Program::create("programname", ...$exercises)
        );
    }

    public function testGetExercisesFromProgram(): void
    {
        $expectedExercises = [
            Exercise::fromString("exercise1"),
            Exercise::fromString("exercise2")
        ];
        $program = Program::create("programname", ...$expectedExercises);
        $actualExercises = $program->getExercises();
        $this->assertEquals($expectedExercises, $actualExercises);
    }

    public function testGetSameNameBack(): void
    {
        $expectedName = "programname";
        $exercises = [
            Exercise::fromString("exercise1"),
            Exercise::fromString("exercise2")
        ];
        $program = Program::create($expectedName, ...$exercises);
        $this->assertEquals($expectedName, $program->getName());
    }

    public function testProgramSpawnWorkout(): void
    {
        $exercises = [
            Exercise::fromString("exercise1"),
            Exercise::fromString("exercise2")
        ];
        $program = Program::create("programname", ...$exercises);
        $this->assertInstanceOf(
            Workout::class,
            $program->spawnWorkout()
        );
    }
}
