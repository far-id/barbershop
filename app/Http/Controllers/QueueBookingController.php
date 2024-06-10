<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Http\Controllers\Controller;
use App\Models\Bookkeeping;
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

        if ($request->status == 'finished') {
            $booking = $booking->load(['services', 'branch']);
            Bookkeeping::create([
                'booking_id' => $booking->booking_id,
                'name' => $booking->name,
                'email' => $booking->email,
                'arrival_time' => $booking->arrival_time,
                'arrival_date' => $booking->arrival_date,
                'services' => $booking->services->pluck('name')->implode(', '),
                'branch_name' => $booking->branch->name,
                'total_price' => $booking->services->sum('price'),
            ]);
        }
        return redirect()->route('queues.index');
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
            ->where('status',  'serving')
        ->where('arrival_date', now()->format('Y-m-d'))
        ->orderBy('arrival_time')
        ->orderBy('booking_id')
        ->get();

        return inertia('Admin/Queue/Index', compact('queues', 'serves'));
    }
}
