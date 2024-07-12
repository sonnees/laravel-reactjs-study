<?php

namespace Tests\Unit;

use App\Services\V1\UserService;
use PHPUnit\Framework\TestCase;

class UserServiceTest extends TestCase
{

    public function test_func_1(): void
    {
        $id = 1;
        $userService = new UserService();

        $result = $userService -> func_1($id);

        $this->assertTrue($result);
    }
}
