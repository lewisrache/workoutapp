<?php declare(strict_types=1);

final class User
{
    private $name;
    private function __construct($name)
    {
        $this->name = $name;
    }
    public static function fromName(string $name): User
    {
        return new self($name);
    }
}
