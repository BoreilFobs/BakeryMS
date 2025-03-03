<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $table = 'messages'; // Explicitly set the table name

    protected $fillable = ['message', 'user_id']; // Add other fields as needed

}
