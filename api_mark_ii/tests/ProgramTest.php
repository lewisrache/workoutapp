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
}
