<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class ComponentTest extends TestCase
{
    public function testCanCreateFromExercise(): void
    {
        $this->assertInstanceOf(
            Component::class,
            Component::fromExercise(Exercise::fromString("componentize"))
        );
    }
    public function testGetComponentName(): void
    {
        $expectedName = "goesthrough";
        $exercise = Exercise::fromString($expectedName);
        $component = Component::fromExercise($exercise);
        $this->assertEquals($exercise->getName(), $component->getName());
    }
}
