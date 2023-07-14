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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
