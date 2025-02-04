<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'emp_name',
        'emp_dob',
        'emp_pob',
        'residence',
        'job',
        'pay_rate',
        'experience',
        'emp_pic_path'
    ];
}
