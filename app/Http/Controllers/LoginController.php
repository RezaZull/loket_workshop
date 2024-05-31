<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;

class LoginController extends Controller
{
    public function index()
    {
        if(Auth::check()){
            if(Auth::user()->is_admin == 1){
                return redirect('admin/dashboard');
            }else{
                return redirect('/dashboard');
            }
        }else{
            return Inertia::render('Auth/Login');
        }
    }

    public function actionLogin(Request $request){
        $request->validate([
            'npm'=>'required',
            'password'=>'required'
        ]);
        $credential = [
            'npm'=>$request->npm,
            'password'=>$request->password
        ];
        if(Auth::attempt($credential)){
            if(Auth::user()->is_admin == 1){
                return redirect('admin/dashboard');
            }else{
                return redirect('/dashboard');
            }
        }else{
            return redirect('login');
        }

    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }
    public function actionRegister(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'npm'=>'required|max:8|unique:'.User::class,
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone'=>'required|max:13',
            'study_program'=>'required'
        ]);
            User::create([
                'name'=>$request->name,
                'npm'=>$request->npm,
                'img_id'=>'1',
                'email'=>$request->email,
                'phone'=>$request->phone,
                'study_program'=>$request->study_program,
                'img_path'=>'user/default.png',
                'password'=>Hash::make($request->input('password')),
                'is_admin'=>0
            ]);
        return redirect()->route('login');
    }

    public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}
