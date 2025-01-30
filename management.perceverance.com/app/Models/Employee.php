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
        'work_days',
        'pay_rate',
        'emp_desk',
        'emp_pic_path'
    ];
}
