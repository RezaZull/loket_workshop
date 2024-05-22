<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable=['img_path','alt'];

    public function User():BelongsTo{
        return $this->belongsTo(User::class,'img_id','id');
    }
    public function UserAttend():BelongsTo{
        return $this->belongsTo(UserAttend::class,'va_img_id','id');
    }
    public function Workshop():BelongsTo{
        return $this->belongsTo(Workshop::class,'banner_img_id','id');
    }
}
