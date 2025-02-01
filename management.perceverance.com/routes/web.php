<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;
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
Route::get('/', function () {
    return view('welcome');
});

Route::get('/logout', [LoginController::class, 'logout']);
Route::get('/employees/form', [EmployeeController::class, 'index']);
Route::post('/employees/create', [EmployeeController::class, 'store']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('home');
    })->name('home');
});
