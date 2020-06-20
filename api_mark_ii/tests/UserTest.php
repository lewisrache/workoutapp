<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class UserTest extends TestCase
{
    public function testCreateUserFromName(): void
    {
        $this->assertInstanceOf(
            User::class,
            User::fromName('newuser')
        );
    }
}
