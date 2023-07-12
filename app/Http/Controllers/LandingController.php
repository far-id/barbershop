<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $services = Service::where('prime', true)->orderBy('name')->get();
        return inertia('Welcome/Welcome', compact('services'));
    }
}
