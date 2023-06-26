<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bookings = collect([
            [
                'booking_id' => 260623,
                'name' => "far",
                'email' => "far@mail.test",
                'arrival_time' => "08:00",
                'arrival_date' => "2023-06-26",
                'total_price' => 40000,
                'status' => "progress",
                'branch_id' => "1",
            ],
            [
                'booking_id' => 260623,
                'name' => "far",
                'email' => "far@mail.test",
                'arrival_time' => "08:00",
                'arrival_date' => "2023-06-26",
                'total_price' => 40000,
                'status' => "progress",
                'branch_id' => "1",
            ],
            [
                'booking_id' => 260623,
                'name' => "far",
                'email' => "far@mail.test",
                'arrival_time' => "08:00",
                'arrival_date' => "2023-06-26",
                'total_price' => 40000,
                'status' => "progress",
                'branch_id' => "1",
            ],
        ])->each(fn ($booking) => Booking::create($booking));
    }
}
