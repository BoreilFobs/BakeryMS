<?php

namespace App\Models;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    use HasApiTokens;
    protected $fillable = [
        'name',
        'password',
        'num_orders',
        'phone',
        'cust_pic_path'
    ];
}
