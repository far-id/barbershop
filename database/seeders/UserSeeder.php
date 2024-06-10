<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        collect([
            [
                'name' => 'Farid Rizky Wijaya',
                'email' => 'farid@mail.test',
                'address' => fake()->address(),
                'branch_id' => 1,
            ],
            [

                'name' => 'Adam Julizar',
                'email' => 'adam@mail.test',
                'address' => fake()->address(),
                'branch_id' => 1,
            ],
            [

                'name' => 'Oktavari Budi',
                'email' => 'okta@mail.test',
                'address' => fake()->address(),
                'branch_id' => 1,
            ],
            [
                'name' => 'Arsya Pramudita',
                'email' => 'arsya@mail.test',
                'address' => fake()->address(),
                'branch_id' => 1,
            ]
        ])->each(function ($employee) {
            $employee = Employee::create($employee);
            User::create([
                'name' => $employee->name,
                'email' => $employee->email,
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
                'employee_id' => $employee->id,
                'role_id' => 0,
            ]);
        });
    }
}
