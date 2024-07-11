<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['skip.csrf'])->group(function () {
});

?>