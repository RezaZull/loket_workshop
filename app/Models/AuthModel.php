<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Hash;

class AuthModel extends Authenticatable
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'auths';
    protected $fillable=['npm','password','is_admin'];
    protected $hidden=['password','is_admin'];

    public function User():HasOne{
        return $this->hasOne(User::class,'npm','npm');
    }
}
