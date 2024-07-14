<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

// api/v1
Route::prefix('api/v1')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('test/{id}', [UserController::class, 'test']);
    // Route::apiResource('user', UserController::class);

    Route::middleware('jwt.auth')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);

        Route::middleware('role:admin')->group(function () {
            Route::apiResource('product', ProductController::class);
            Route::apiResource('user', UserController::class);
        });

        Route::middleware('role:user,admin')->group(function () {
            Route::get('products', [ProductController::class, 'index']);
            Route::get('products/{id}', [ProductController::class, 'show']);
        });
    });
});
