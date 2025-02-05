<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function show(){
        return view('welcome');
    }
     public function login(Request $request)
    {
        // Validate the request
        $request->validate([
            'name' => 'required',
            'password' => 'required',
        ]);
        $name = trim($request->name);
        $password = trim($request->password);
        // Attempt to log the user in
        if (Auth::guard('web')->attempt(['name' => $name , 'password' => $password])) {
            return redirect('/dashboard');
        }else {
            // Authentication failed
            return back()->withErrors([
                'name' => 'invalid Credentials',
            ]);
        }

    }
   
}
