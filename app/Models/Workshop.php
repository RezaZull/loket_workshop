<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Workshop extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable=['name','date','detail','banner_img_id','workshop_major_id'];
    public function WorkshopMajor():HasMany{
        return $this->hasMany(WorkshopMajor::class,'id','workshop_major_id');
    }
    public function Image():HasOne{
        return $this->hasOne(Image::class,'id','banner_img_id');
    }
}
