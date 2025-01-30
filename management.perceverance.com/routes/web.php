<?php

use App\Http\Controllers\adminAuthenticationController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\EmployeeController;
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
    Route::get('/offers', function () {
        return view('offers');
    });
    Route::get('/employees', function () {
        return view('employees');
    });
    Route::get('/customers', function () {
        return view('customers');
    });
    Route::get('/orders', function () {
        return view('orders');
    });
// });
Route::get('/', [adminController::class, 'show']);
Route::post('/adminLogin', [adminController::class, 'login']);
Route::get('/logout', [adminController::class, 'logout']);
Route::get('/employees/form', [EmployeeController::class, 'index']);
