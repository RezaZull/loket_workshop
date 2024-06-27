<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserAttend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if(!empty($request->query('search'))){
            $data=User::where('name','like','%'.$request->query('search').'%')->paginate(10);
        }else{
            $data = User::paginate(10);
        }
        return Inertia::render('Admin/UserSetting/Index', [
            'title' => 'Daftar User',
            'data' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/UserSetting/Insert', [
            'title' => 'Tambah User'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->file('imagesPick') != null) {
            $image_path = $request->file('imagesPick')->store('user', 'public');
        } else {
            $image_path = 'user/default.png';
        }
        $request->validate([
            'name' => 'required|max:50',
            'npm' => 'required|max:8',
            'email' => 'required|max:50',
            'phone' => 'required|max:13',
            'is_admin' => 'required',
            'study_program' => 'required|max:30',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        User::create([
            'name' => $request->name,
            'npm' => $request->npm,
            'email' => $request->email,
            'phone' => $request->phone,
            'study_program' => $request->study_program,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin,
            'img_path' => $image_path,
        ]);
        return redirect()->route('admin.user.index')->with('session',['title'=>'info','message'=>'Data user berhasil ditambah']);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

        $dataWorkshop = UserAttend::with('Workshop')->where('user_id','=',$user->id)->paginate(5);
        return Inertia::render('Admin/UserSetting/Detail', [
            'title' => $user->name,
            'data' => [
                'userData'=>$user,
                'userWorkshop'=>$dataWorkshop
                ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('Admin/UserSetting/Update', [
            'title' => 'Edit' . $user->name,
            'data' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        if ($request->file('imagesPick') != null) {
            Storage::delete($user->img_path);
            $image_path = $request->file('imagesPick')->store('user', 'public');
        } else {
            $image_path = $user->img_path;
        }
        $request->validate([
            'name' => 'required|max:50',
            'npm' => 'required|max:8',
            'email' => 'required|max:50',
            'phone' => 'required|max:13',
            'is_admin' => 'required',
            'study_program' => 'required|max:30',
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
        return redirect()->route('admin.user.index')->with('session',['title'=>'info','message'=>'Data user berhasil diubah']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        if ($user->img_path != 'user/default.png') {
            Storage::delete($user->img_path);
        }
        $user->delete();
        return redirect()->route('admin.user.index')->with('session',['title'=>'info','message'=>'Data user berhasil dihapus']);
    }
}
