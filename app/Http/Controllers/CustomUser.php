<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomUser extends Controller
{
    public function ShowDashboard(){
        return Inertia::render('Users/Dashboard');
    }
}
