<?php

namespace App\Http\Controllers;

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
            'password' => 'required|string|min:6'
        ]);

        // Check if user with same name already exists
        if (User::where('name', $validatedData['name'])->exists()) {
            return response()->json([
                'status' => 'error',
                'message' => 'A user with this name already exists. Please choose a different name.'
            ], 400);
        }

        $user = User::create([
            'name' => $validatedData['name'],
            'password' => Hash::make($validatedData['password'])
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

        if (!Auth::attempt($validatedData)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = User::where('name', $validatedData['name'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token
        ], 200);
    }

}
