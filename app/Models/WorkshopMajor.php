<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkshopMajor extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable =['major'];
    public function Workshop():BelongsTo{
        return $this->belongsTo(Workshop::class,'workshop_major_id','id');
    }
}
