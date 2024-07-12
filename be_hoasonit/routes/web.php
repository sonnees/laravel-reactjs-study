<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// api/v1
Route::group(['prefix'=>'api/v1', 'namespace'=> 'App\Http\Controllers\Api\V1'], function(){

    // Route không yêu cầu xác thực
    Route::post('login', [AuthController::class, 'login']);
    Route::post('test/{id}', [UserController::class, 'test']);
    // Route::apiResource('user', UserController::class);

    // Các route yêu cầu xác thực JWT
    Route::middleware(['jwt.auth'])->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);

        Route::apiResource('product', ProductController::class);
        Route::apiResource('user', UserController::class);
    });
});
