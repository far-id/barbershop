<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QueueBookingController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingController::class, 'index']);
Route::post('/booking', [LandingController::class, 'create'])->name('booking');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('queues', [QueueBookingController::class, 'index'])->name('queues.index');
    Route::put('/queues/status/{booking:id}', [QueueBookingController::class, 'status'])->name('queue.status');

    Route::middleware('admin')->group(function () {
        Route::resource('services', ServiceController::class);
        Route::resource('branches', BranchController::class);
        Route::resource('employees', EmployeeController::class);
    });
});

require __DIR__ . '/auth.php';
