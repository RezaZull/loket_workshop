<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserAttend;
use Illuminate\Http\Request;

class UserAttendController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserAttend $userAttend)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserAttend $userAttend)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserAttend $userAttend)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAttend $userAttend)
    {
        //
    }

    public function setVa( Request $request,UserAttend $userAttend){
        $request->validate([
            'virtual_account'=>'required'
        ]);
        $userAttend->update([
            'virtual_account'=>$request->virtual_account,
            'status'=>'Menunggu Pembayaran'
        ]);
        return redirect()->back();
    }
    public function setStatus(Request $request,UserAttend $userAttend){
        $request->validate([
            'status'=>'required'
        ]);
        $userAttend->update([
            'status'=>$request->status
        ]);
        return redirect()->back();
    }
}
