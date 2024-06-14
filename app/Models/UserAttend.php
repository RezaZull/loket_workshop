<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserAttend extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id', 'workshop_id', 'virtual_account', 'status', 'img_path','message'];
    public function User():HasOne{
        return $this->hasOne(User::class,'id','user_id');
    }
    public function Workshop():HasOne{
        return $this->hasOne(Workshop::class,'id','workshop_id');
    }
}
