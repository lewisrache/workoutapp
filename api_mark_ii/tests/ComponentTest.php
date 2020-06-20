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
    public function testGetComponentNameSameAsExerciseName(): void
    {
        $expectedName = "goesthrough";
        $exercise = Exercise::fromString($expectedName);
        $component = Component::fromExercise($exercise);
        $this->assertEquals($exercise->getName(), $component->getName());
    }

    public function testSetListInitializesEmpty(): void
    {
        $component = Component::fromExercise(Exercise::fromString("bogus"));
        $this->assertEmpty($component->getSetList());        
    }

    // public function testAddComponentSetAddsToSetList(): void
    // {
    //     $componentSet = ComponentSet::create(150, 5);
    //     $component = Component::fromExercise(Exercise::fromString("bogus"));
    //     // first check that
    //     $firstSetList = $component->getSetList();
    //     $this->assertEmpty($firstSetList);
    //     $secondSetList = $component->addSet($componentSet);
    //     $this->assertTrue(count($firstSetList) < count($secondSetList));
    //     $this->assertEquals($secondSetList, $component->getSetList());
    // }
}
