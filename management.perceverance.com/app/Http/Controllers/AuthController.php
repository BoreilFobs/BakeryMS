<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
            'phone' => 'required|string|min:9|max:9'
        ]);

        // Check if user with same name already exists
        if (Customer::where('name', $validatedData['name'])->exists()) {
            return response()->json([
                'status' => 'error',
                'message' => 'A user with this name already exists. Please choose a different name.'
            ], 400);
        }
        $user = Customer::create([
            'name' => $validatedData['name'],
            'password' => Hash::make($validatedData['password']),
            'phone' => $validatedData['phone']
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token
        ], 201);
    }
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = Customer::where('name', $validatedData['name'])->first();

        if (!$user || !Hash::check($validatedData['password'], $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token
        ], 200);
    }

}
