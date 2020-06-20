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
}
