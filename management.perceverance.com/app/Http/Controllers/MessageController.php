<?php

// app/Http/Controllers/MessageController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Pusher\PushNotifications\PushNotifications;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            'message' => 'required|string',
        ]);

        // Create a new message
        $message = Message::create([
            'message' => $request->message,
            'user_id' => 1, // Assuming the message is associated with a user
        ]);

        return response()->json([
            'message' => 'Message created and notification sent successfully.',
            'data' => $message,
        ], 201); // HTTP 201: Created
    }
}
