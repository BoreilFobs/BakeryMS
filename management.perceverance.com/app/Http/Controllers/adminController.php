<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class adminController extends Controller
{
    //
    public function show(){
        return view('login');
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
            return redirect('/home');
        }else {
            // Authentication failed
            return back()->withErrors([
                'name' => 'invalid Credentials',
            ]);
        }

    }
    public function logout(){
        return redirect('/');
    }
}
