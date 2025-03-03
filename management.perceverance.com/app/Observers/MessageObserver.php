<?php

namespace App\Observers;

use App\Models\Device;
use App\Models\Message;
use Pusher\PushNotifications\PushNotifications;
use Illuminate\Support\Facades\Log;

class MessageObserver
{
    /**
     * Handle the Message "created" event.
     */
    public function created(Message $message): void
    {
        //
        // Get the message content from the `message` column
        $notificationMessage = $message->message;

        // Get all device IDs (or filter by user if needed)
        $deviceIds = Device::pluck('device_id')->toArray();

        if (!empty($deviceIds)) {
            $this->sendPushNotification($deviceIds, 'New Message', $notificationMessage);
        }
        Log::info('New message created:', ['message' => $message->message]);
    }

    private function sendPushNotification($deviceIds, $title, $body)
    {
        $beamsClient = new PushNotifications([
            'instanceId' => config('beams.instance_id'),
            'secretKey' => config('beams.secret_key'),
        ]);

        $beamsClient->publishToInterests(
            ['all-users'], // Interests (e.g., user-specific or topic-based)
            [
                'web' => [
                    'notification' => [
                        'title' => $title,
                        'body' => $body,
                    ],
                ],
            ]
        );
    }
    /**
     * Handle the Message "updated" event.
     */
    public function updated(Message $message): void
    {
        //
    }

    /**
     * Handle the Message "deleted" event.
     */
    public function deleted(Message $message): void
    {
        //
    }

    /**
     * Handle the Message "restored" event.
     */
    public function restored(Message $message): void
    {
        //
    }

    /**
     * Handle the Message "force deleted" event.
     */
    public function forceDeleted(Message $message): void
    {
        //
    }
}
