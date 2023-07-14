<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Branch;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class LandingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $services = Service::orderBy('name')->get();
        $branches = Branch::orderBy('name')->get();
        return inertia('Welcome/Welcome', compact('services', 'branches'));
    }
    public function create(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|min:3|max:50',
            'email' => 'required|email',
            'branch' => 'required|integer|exists:branches,id',
            'arrival_time' => [
                'required', 'date_format:H:i',
                Rule::when(fn ($input) => $input->arrival_date === now()->format('Y-m-d'), ['after_or_equal:' . now()->format('H:i')]),
            ],
            'arrival_date' => 'required|date_format:Y-m-d|after_or_equal:' . now()->format('Y-m-d'),
            'comment' => 'string|nullable',
            'services' => 'required|array|min:1',
        ]);
        DB::transaction(function () use ($request) {
            $booking = Booking::create([
                'booking_id' => date_format(date_create($request->arrival_date), "ymd"),
                'name' => $request->name,
                'branch_id' => $request->branch,
                'email' => $request->email,
                'arrival_time' => $request->arrival_time,
                'arrival_date' => $request->arrival_date,
                'comment' => $request->comment,
                'total_price' => Service::select('price')->whereIn('id', $request->services)->sum('price'),
                'status' => 'queue',
            ]);
            $booking->services()->sync($request->services);
        });
        return back();
    }
}
