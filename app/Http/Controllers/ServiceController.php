<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Services\GoogleCloudStorageService;

class ServiceController extends Controller
{
    public function __construct(private GoogleCloudStorageService $googleCloudStorageService)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('name')->get();
        return inertia('Admin/Service/Index', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Service/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        Service::create([
            'name' => $request->name,
            'price' => $request->price,
            'prime' => $request->prime,
            'image' => $request->prime == true
                ? $this->googleCloudStorageService->uploadImage($request->file('image'))
                : null
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        return inertia('Admin/Service/Edit', compact('service'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $image = null;
        if ($request->prime == true) {
            $service->image !== null
                ? $this->googleCloudStorageService->deleteImage($service->image)
                : null;
            $image = $this->googleCloudStorageService->uploadImage($request->file('image'));
        }
        $service->update([
            'name' => $request->name,
            'price' => $request->price,
            'prime' => $request->prime,
            'image' => $image
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->image != null
            ? $this->googleCloudStorageService->deleteImage($service->image)
            : null;
        $service->delete();

        return back();
    }
}
