<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RollCallController extends Controller
{
    //
    public function index()
    {
        return view("rollcall.index");
    }
}
