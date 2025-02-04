<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// customer API Route
Route::get('/customers', [CustomerController::class, 'index']);
Route::post('/customers/register', [CustomerController::class, 'store']);
Route::get('/customers/{id}/profile', [CustomerController::class, 'show']);
Route::get('/customers/{id}/edit', [CustomerController::class, 'update']);
Route::get('/customers/{id}/delete', [CustomerController::class, 'delete']);

// offers API route
Route::get('/offers', [OfferController::class, 'index']);

// Orders API route
// pic the flow of the app from tuesday'a boook behind
Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/{id}/details', [OrderController::class, 'show']);
Route::post('/orders/create', [OrderController::class, 'store']);
Route::get('/orders/{id}/edit', [OrderController::class, 'update']);
Route::get('/orders/{id}/delete', [OrderController::class, 'delete']);
