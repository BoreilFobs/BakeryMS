<?php

use App\Http\Controllers\CompositionController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\FormulaController;
use App\Http\Controllers\IngredientsController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RollCallController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware(['auth'])->group(function () {
    Route::get('/home', function () {
        return view('home');
    });
    Route::get('/lo-gout', [EmployeeController::class, 'logout']);

    // routing for employees
    Route::get('/employees/form', [EmployeeController::class, 'form']);
    Route::get('/employees', [EmployeeController::class, 'index']);
    Route::post('/employees/create', [EmployeeController::class, 'store']);
    Route::get('/employees/{id}/profile', [EmployeeController::class, 'show']);
    Route::get('/employees/{id}/edit', [EmployeeController::class, 'formEdit']);
    Route::put('/employees/{id}/editData', [EmployeeController::class, 'update']);
    Route::get('/employees/{id}/delete', [EmployeeController::class, 'delete']);


    //  routing for roll calls
    Route::get("employees/rollCall", [RollCallController::class, 'index']);


    // routing for customers

    Route::get('/customers', [CustomerController::class, 'index']);
    Route::get('/customers/{id}/profile', [CustomerController::class, 'show']);
    Route::get('/customers/{id}/delete', [CustomerController::class, 'delete']);

    // routing for offers

    Route::get('/offers/form', [OfferController::class, 'form']);
    Route::get('/offers', [OfferController::class, 'index']);
    Route::post('/offers/create', [OfferController::class, 'store']);
    Route::get('/offers/{id}/profile', [OfferController::class, 'show']);
    Route::get('/offers/{id}/edit', [OfferController::class, 'formEdit']);
    Route::put('/offers/{id}/editData', [OfferController::class, 'update']);
    Route::get('/offers/{id}/delete', [OfferController::class, 'delete']);

    // routing for orders

    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{id}/details', [OrderController::class, 'show']);

    // ROUTING FOR COMPOSITION

    Route::get('/composition', [CompositionController::class, 'index']);
    Route::get('/orders/edit', [CompositionController::class, 'update']);

    // routing for ingredient

    Route::get('/ingredient/form', [IngredientsController::class, 'form']);
    Route::get('/ingredients', [IngredientsController::class, 'index']);
    Route::post('/ingredients/create', [IngredientsController::class, 'store']);
    Route::get('/ingredients/{id}/edit', [IngredientsController::class, 'formEdit']);
    Route::put('/ingredients/{id}/editData', [IngredientsController::class, 'update']);
    Route::get('/ingredients/{id}/delete', [IngredientsController::class, 'delete']);

    // route for pusher
    Route::post('/save-device-id', [DeviceController::class, 'saveDeviceId']);
});

Route::fallback(function () {
    return response()->view('errors.404', [], 404);
});

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () {
//         return view('dashboard');
//     })->name('dashboard');
// });
