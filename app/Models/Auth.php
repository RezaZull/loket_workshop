<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Auth extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable=['npm','password','is_admin'];
    protected $hidden=['password','is_admin'];

    public function User():HasOne{
        return $this->hasOne(User::class,'npm','npm');
    }
}
