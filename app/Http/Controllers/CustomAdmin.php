<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomAdmin extends Controller
{
    public function ShowDashboard(){
        return Inertia::render('Admin/Dashboard');
    }
}
