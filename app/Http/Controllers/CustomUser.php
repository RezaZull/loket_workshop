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
    public function ShowWorkshop(Request $request){
        $data = Workshop::orderBy('date','desc');
        if(!empty($request->query('search'))){
            $data->where('name','like','%'.$request->query('search').'%');
        }
        return Inertia::render('Users/Workshop/Index',[
            'title'=>'list workshop',
            'data'=>$data->paginate(9)
        ]);
    }

    public function ProcessWorkshop(Request $request){
        $request->validate([
            'user_id'=>'exists:users,id',
            'workshop_id'=>['exists:workshops,id','unique:user_attends,workshop_id,NULL,id,user_id,'.$request->user_id],
        ]);
        UserAttend::create([
            'user_id'=>$request->user_id,
            'workshop_id'=>$request->workshop_id,
            'status'=>'Menunggu VA',
        ]);
        return redirect()->back()->with('session',['title'=>'info','message'=>'Berhasil Daftar Workshop']);
    }

    //attended
    public function ShowAttended(Request $request){
        $data = UserAttend::with(['Workshop'])->where('user_id','=',Auth::id())->orderBy('created_at','desc');
        if(!empty($request->query('search'))){
            $data->whereRelation('workshop','name','like','%'.$request->query('search').'%');
        }
        return Inertia::render('Users/Attend/Index',[
            'title'=>'List Workshop Diikuti',
            'data'=>$data->paginate(10)
        ]);
    }

    public function uploadVA(UserAttend $userAttend,Request $request){
        // ddd($userAttend,$request);
        if($userAttend->img_path != null){
            Storage::delete($userAttend->img_path);
        }
        $img_path = $request->file('img_path')->store('virtual_account','public');
        $userAttend->update([
           'img_path'=>$img_path,
           'status'=> 'Menunggu Konfirmasi'
        ]);
        return redirect()->back()->with('session',['title'=>'info','message'=>'Berhasil Upload Virtual Account']);
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
        return redirect()->route('/profile')->with('session',['title'=>'info','message'=>'Profile berhasil diubah']);
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
        return redirect()->route('/profile')->with('session',['title'=>'info','message'=>'Password berhasil diubah']);
    }
}
