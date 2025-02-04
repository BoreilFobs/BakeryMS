<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
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
// Route::middleware(['auth'])->group(function () {
    Route::get('/home', function () {
        return view('home');
    });
// });
Route::get('/', function () {
    return view('welcome');
});

Route::get('/logout', [LoginController::class, 'logout']);

// routing for employees
Route::get('/employees/form', [EmployeeController::class, 'form']);
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employees/create', [EmployeeController::class, 'store']);
Route::get('/employees/{id}/profile', [EmployeeController::class, 'show']);
Route::get('/employees/{id}/edit', [EmployeeController::class, 'formEdit']);
Route::put('/employees/{id}/editData', [EmployeeController::class, 'update']);
Route::get('/employees/{id}/delete', [EmployeeController::class, 'delete']);

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


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
