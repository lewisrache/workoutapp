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

    public function testWorkoutNameSameAsProgram(): void
    {
        $program = Program::create('programname', ...[Exercise::fromString('exercisename')]);
        $workout = Workout::fromProgram($program);
        $this->assertEquals($program->getName(), $workout->getName());
    }

    public function testWorkoutGetsComponentClonesForProgramExercises(): void
    {
        $program = Program::create(
            'programname',
            ...[
                Exercise::fromString('exercisename1'),
                Exercise::fromString('exercisename2'),
                Exercise::fromString('exercisename3'),
            ]
        );
        $workout = Workout::fromProgram($program);
        $programExercises = $program->getExercises();
        $workoutComponents = $workout->getComponents();
        // # components = # exercises
        $this->assertEquals(count($programExercises), count($workoutComponents));
        // NOTE: we don't _really_ care about the ordering, but it was the simplest way
        // what we really care about is that foreach exercise there is a matching component (by name)
        for ($i=0; $i<count($programExercises); $i++) {
            $this->assertEquals($programExercises[$i]->getName(), $workoutComponents[$i]->getName());
        }
    }

    public function testCreateWorkoutFromExerciseList(): void
    {
        $exercises = [
            Exercise::fromString('exercisename1'),
            Exercise::fromString('exercisename2'),
        ];
        $this->assertInstanceOf(
            Workout::class,
            Workout::fromExercises(...$exercises)
        );
    }

    public function testAddExerciseToWorkout(): void
    {
        $program = Program::create(
            'programname',
            ...[
                Exercise::fromString('exercisename1'),
                Exercise::fromString('exercisename2'),
                Exercise::fromString('exercisename3'),
            ]
        );
        $workout = Workout::fromProgram($program);
        $newExercise = Exercise::fromString('newexercise');
        $workout->addExercise($newExercise);
        $this->assertEquals($newExercise->getName(), $workout->getComponents()[3]->getName());
    }
}
