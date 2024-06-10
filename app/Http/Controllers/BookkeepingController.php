<?php

namespace App\Http\Controllers;

use App\Exports\BookkeepingExport;
use App\Http\Requests\ExportBookkeepingRequest;
use App\Models\Bookkeeping;
use App\Http\Resources\BookkeepingResource;
use Maatwebsite\Excel\Facades\Excel;

class BookkeepingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Bookkeeping/Index', [
            'bookkeeping' => BookkeepingResource::collection(Bookkeeping::latest()->paginate(50)),
        ]);
    }

    /**
     * Export bookkeeping data to excel.
     */
    public function export()
    {
        return Excel::download(
            new BookkeepingExport,
            'bookkeeping.xlsx'
        );
    }
}
