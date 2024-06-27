<?php

use App\Http\Controllers\Admin\UserSettingController;
use App\Http\Controllers\Admin\CustomAdmin;
use App\Http\Controllers\User\CustomUser;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\UserAttendController;
use App\Http\Controllers\Admin\WorkshopController;
use Illuminate\Support\Facades\Route;
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


Route::get('/', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'actionLogin'])->name('actionLogin');
Route::post('/register', [LoginController::class, 'actionRegister'])->name('actionRegister');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/register', [LoginController::class, 'register'])->name('register');


Route::group(['middleware'=>'Admin','prefix'=>'admin','as'=>'admin.'],function () {
    Route::resource('/user', UserSettingController::class);
    Route::resource('/workshop', WorkshopController::class);
    Route::resource('/userattend', UserAttendController::class);
    route::put('/userattend/setva/{userAttend}',[UserAttendController::class,'setVa']);
    route::put('/userattend/setstatus/{userAttend}',[UserAttendController::class,'setStatus']);
    Route::get('/dashboard', [CustomAdmin::class, 'ShowDashboard']);
    Route::get('/profile',[CustomAdmin::class,'ShowProfile'])->name('profile');
    Route::get('/profile/{user}/edit',[CustomAdmin::class,'EditProfile'])->name('profile.edit');
    Route::put('/profile/edit/{user}',[CustomAdmin::class,'ProcessEditProfile'])->name('profile.update');
    Route::get('/profile/{user}/changepassword',[CustomAdmin::class,'ChangePassword'])->name('profile.changePass');
    Route::put('/profile/changepassword/{user}',[CustomAdmin::class,'ProcessChangePassword'])->name('profile.updatePass');
});
Route::group(['middleware'=>'User','as'=>'user.'],function () {
    Route::get('/dashboard', [CustomUser::class, 'ShowDashboard'])->name('dashboard');

    Route::get('/workshop',[CustomUser::class,'ShowWorkshop'])->name('showWorkshop');
    Route::post('/workshop',[CustomUser::class,'ProcessWorkshop'])->name('processWorkshop');

    Route::get('/attended',[CustomUser::class,'ShowAttended'])->name('showAttend');
    Route::put('/attended/uploadva/{userAttend}',[CustomUser::class,'uploadVA'])->name('uploadVA');

    Route::get('/profile',[CustomUser::class,'ShowProfile'])->name('profile');
    Route::get('/profile/{user}/edit',[CustomUser::class,'EditProfile'])->name('profile.edit');
    Route::put('/profile/edit/{user}',[CustomUser::class,'ProcessEditProfile'])->name('profile.update');
    Route::get('/profile/{user}/changepassword',[CustomUser::class,'ChangePassword'])->name('profile.changePass');
    Route::put('/profile/changepassword/{user}',[CustomUser::class,'ProcessChangePassword'])->name('profile.updatePass');
});

require __DIR__ . '/auth.php';
