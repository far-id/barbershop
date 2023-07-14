<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use Illuminate\Http\Request;

class QueueBookingController extends Controller
{
    public function status(Request $request, Booking $booking)
    {
        $request->validate([
            'status' => 'required|string|min:3|max:10'
        ]);
        $booking->update([
            'status' => $request->status
        ]);
        return back();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queues = Booking::with('services')
        ->where('status',  'queue')
        ->where('arrival_date', now()->format('Y-m-d'))
        ->orderBy('arrival_time')
        ->orderBy('booking_id')
        ->get();

        $serves = Booking::with('services')
        ->where('status',  'sering')
        ->where('arrival_date', now()->format('Y-m-d'))
        ->orderBy('arrival_time')
        ->orderBy('booking_id')
        ->get();

        return inertia('Admin/Queue/Index', compact('queues', 'serves'));
    }
}
