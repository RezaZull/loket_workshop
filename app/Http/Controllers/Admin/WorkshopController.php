<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserAttend;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class WorkshopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!empty($request->query('search'))) {
            $data = Workshop::where('name', 'like', '%' . $request->query('search') . '%')->orderBy('date','desc');
        } else {
            $data = Workshop::orderBy('date','desc');
        }
        return Inertia::render('Admin/Workshop/Index', [
            'data' => $data->paginate(10),
            'title' => 'admin workshop'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Workshop/Insert', [
            'title' => 'insert workshop'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->file('imagesPick') != null) {
            $image_path = $request->file('imagesPick')->store('workshop', 'public');
        } else {
            $image_path = 'workshop/default.png';
        }
        $request->validate([
            'name' => 'required',
            'date' => 'required',
            'detail' => 'required',
            'study_program' => 'required',
        ]);
        Workshop::create([
            'name' => $request->name,
            'date' => $request->date,
            'detail' => $request->detail,
            'study_program' => $request->study_program,
            'img_path' => $image_path,
        ]);
        return redirect()->route('workshop.index')->with('session',['title'=>'info','message'=>'Data workshop berhasil ditambah']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Workshop $workshop,Request $request)
    {
        $dataAttend = UserAttend::with('User')->where('workshop_id', '=', $workshop->id);
        if(!empty($request->query('search'))){
            $dataAttend->whereRelation('User','name','like','%'.$request->query('search').'%');
        }
        return Inertia::render('Admin/Workshop/Detail', [
            'title' => $workshop->name,
            'data' => $workshop,
            'usersAttend' => $dataAttend->paginate(10)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Workshop $workshop)
    {
        return Inertia::render('Admin/Workshop/Update', [
            'title' => 'Edit ' . $workshop->name,
            'data' => $workshop
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Workshop $workshop)
    {
        if ($request->file('imagesPick') != null) {
            Storage::delete($workshop->img_path);
            $image_path = $request->file('imagesPick')->store('workshop', 'public');
        } else {
            $image_path = $workshop->img_path;
        }
        $request->validate([
            'name' => 'required',
            'date' => 'required',
            'detail' => 'required',
            'study_program' => 'required',
        ]);
        $workshop->update([
            'name' => $request->name,
            'date' => $request->date,
            'detail' => $request->detail,
            'study_program' => $request->study_program,
            'img_path' => $image_path,
        ]);
        return redirect()->route('workshop.index')->with('session',['title'=>'info','message'=>'Data workshop berhasil diubah']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Workshop $workshop)
    {
        if ($workshop->img_path != 'workshop/default.png') {
            Storage::delete($workshop->img_path);
        }
        Workshop::destroy($workshop->id);
        return redirect()->route('workshop.index')->with('session',['title'=>'info','message'=>'Data workshop berhasil dihapus']);
    }
}
