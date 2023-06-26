<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $this->call([
            ServiceSeeder::class,
            BranchSeeder::class,
        ]);

        \App\Models\User::factory()->count(20)->create();

        $serivces = array_column(\App\Models\Service::select('id')->get()->toArray(), 'id');
        $bookings = \App\Models\Booking::factory()->count(400)->make();
        $bookings->each(function ($booking) use ($serivces) {
            $data = \App\Models\Booking::create($booking->toArray());
            $data->services()->attach(array_rand($serivces, rand(1, count($serivces))));
        });
    }
}
