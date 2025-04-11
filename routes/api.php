<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaymentController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/payment', [PaymentController::class, 'createSnapToken']);

