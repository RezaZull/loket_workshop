<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomAdmin;
use App\Http\Controllers\CustomUser;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserAttendController;
use App\Http\Controllers\WorkshopController;
use App\Http\Controllers\WorkshopMajorController;
use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'actionLogin'])->name('actionLogin');
Route::post('/register', [LoginController::class, 'actionRegister'])->name('actionRegister');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/register', [LoginController::class, 'register'])->name('register');


Route::group(['middleware'=>'Admin','prefix'=>'admin','name'=>'admin.'],function () {
    Route::resource('/auth', AuthController::class);
    Route::resource('/image', ImageController::class);
    Route::resource('/user', UserAttendController::class);
    Route::resource('/workshop', WorkshopController::class);
    Route::resource('/userattend', UserAttendController::class);
    Route::resource('/workshopmajor', WorkshopMajorController::class);
    Route::get('/dashboard', [CustomAdmin::class, 'ShowDashboard']);
});
Route::group(['middleware'=>'User','name'=>'user.'],function () {
    Route::get('/dashboard', [CustomUser::class, 'ShowDashboard'])->name('dashboard');
});

require __DIR__ . '/auth.php';
