<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class CustomAdmin extends Controller
{
    public function ShowDashboard(){
        return Inertia::render('Admin/Dashboard');
    }
    public function ShowProfile(){
        return Inertia::render('Admin/Profile/Index',[
            'title' =>'Profile'
        ]);
    }
    public function EditProfile(User $user){
        return Inertia::render('Admin/Profile/Update',[
            'title'=>'Update Profile',
            'data'=>$user
        ]);
    }
    public function ProcessEditProfile(User $user, Request $request){
        if ($request->file('imagesPick') != null) {
            Storage::delete($user->img_path);
            $image_path = $request->file('imagesPick')->store('user', 'public');
        } else {
            $image_path = $user->img_path;
        }
        $request->validate([
            'name' => 'required',
            'npm' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'is_admin' => 'required',
            'study_program' => 'required',
        ]);
        $user->update([
            'name' => $request->name,
            'npm' => $request->npm,
            'email' => $request->email,
            'phone' => $request->phone,
            'study_program' => $request->study_program,
            'is_admin' => $request->is_admin,
            'img_path' => $image_path,
        ]);
        return redirect()->route('admin.profile')->with('session',['title'=>'info','message'=>'Profile berhasil diubah']);
    }
    public function ChangePassword(User $user){
        return Inertia::render('Admin/Profile/ChangePassword',[
            'title'=>'Ubah Password',
            'data'=>$user
        ]);
    }
    public function ProcessChangePassword(User $user,Request $request){
        $request->validate([
            'oldPassword'=>'current_password',
            'newPassword'=>['required','confirmed', Rules\Password::defaults()]
        ]);
        $user->update([
            'password'=>Hash::make($request->newPassword)
        ]);
        return redirect()->route('admin.profile')->with('session',['title'=>'info','message'=>'Password berhasil diubah']);
    }
}
