<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;
use Illuminate\Support\Facades\Log;

class DeviceController extends Controller
{
    //
    public function saveDeviceId(Request $request)
    {
        try {
            $request->validate([
                'device_id' => 'required|string',
            ]);

            // Get the authenticated user
            $user = auth()->user();

            // Use the DeviceId model directly
            Device::updateOrCreate(
                ['device_id' => $request->device_id, 'user_id' => $user->id],
                ['device_id' => $request->device_id, 'user_id' => $user->id]
            );

            return response()->json(['message' => 'Device ID saved successfully.']);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Error saving device ID: ' . $e->getMessage());

            // Return a detailed error response
            return response()->json([
                'message' => 'An error occurred while saving the device ID.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
