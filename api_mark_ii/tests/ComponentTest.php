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
}
