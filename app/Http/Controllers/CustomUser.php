<?php

namespace App\Http\Controllers;

use App\Models\UserAttend;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Validation\Rules;

class CustomUser extends Controller
{
    public function ShowDashboard()
    {
        return Inertia::render('Users/Dashboard');
    }
    //workshop
    public function ShowWorkshop(){
        $data = Workshop::paginate(10);
        return Inertia::render('Users/Workshop/Index',[
            'title'=>'list workshop',
            'data'=>$data
        ]);
    }

    public function ProcessWorkshop(Request $request){
        $request->validate([
            'user_id'=>'exists:users,id',
            'workshop_id'=>'exists:workshops,id|unique:workshop',
            'status'=>'menunggu VA',
        ]);
        UserAttend::create([
            'user_id'=>$request->user_id,
            'workshop_id'=>$request->workshop_id
        ]);
        return redirect()->back();
    }

    //attended
    public function ShowAttended(){
        $data = UserAttend::with('Workshop')->where('user_id','=',Auth::id())->paginate(5);
        return Inertia::render('Users/Attend/Index',[
            'title'=>'List Workshop Diikuti',
            'data'=>$data
        ]);
    }

    //profile
    public function ShowProfile()
    {
        $data = UserAttend::with('Workshop')->where('user_id','=',Auth::id())->paginate(5);
        return Inertia::render('Users/Profile/Index', [
            'title' => 'Profile',
            'data'=> $data
        ]);
    }
    public function EditProfile(User $user)
    {
        return Inertia::render('Users/Profile/Update', [
            'title' => 'Update Profile',
            'data' => $user
        ]);
    }
    public function ProcessEditProfile(User $user, Request $request)
    {
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
        return redirect()->action([CustomUser::class, 'ShowProfile']);
    }
    public function ChangePassword(User $user)
    {
        return Inertia::render('Users/Profile/ChangePassword', [
            'title' => 'Ubah Password',
            'data' => $user
        ]);
    }
    public function ProcessChangePassword(User $user, Request $request)
    {
        $request->validate([
            'oldPassword' => 'current_password',
            'newPassword' => ['required', 'confirmed', Rules\Password::defaults()]
        ]);
        $user->update([
            'password' => Hash::make($request->newPassword)
        ]);
        return redirect()->action([CustomUser::class, 'ShowProfile']);
    }
}
