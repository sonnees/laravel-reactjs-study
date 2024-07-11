<?php

use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// api/v1
Route::group(['prefix'=>'api/v1', 'namespace'=> 'App\Http\Controllers\Api\V1'], function(){

    Route::apiResource('product', ProductController::class);
    Route::apiResource('user', UserController::class);

});
