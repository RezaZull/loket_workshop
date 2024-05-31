<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
