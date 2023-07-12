<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::whereHas('user')
        ->select(['employees.*', 'branches.name as branch_name'])
        ->join('branches', 'employees.branch_id', '=', 'branches.id')
        ->orderBy('branches.name')
        ->orderBy('employees.name')
        ->get();
        // return $employees;
        return inertia('Admin/Employee/Index', compact('employees'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $branches = Branch::orderBy('name')->get();
        return inertia('Admin/Employee/Create', compact('branches'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request)
    {
        DB::transaction(function () use ($request) {
            $employee = Employee::create([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'branch_id' => $request->branch,
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'employee_id' => $employee->id
            ]);
            event(new Registered($user));
        });

        return redirect()->route('employees.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        $branches = Branch::orderBy('name')->get();
        return inertia('Admin/Employee/Edit', compact('employee', 'branches'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        DB::transaction(function () use ($request, $employee) {
            $employee->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'branch_id' => $request->branch,
            ]);

            $user = $employee->user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);
            event(new Registered($user));
        });

        return redirect()->route('employees.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->user->delete();

        return back();
    }
}
