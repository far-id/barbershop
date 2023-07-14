<?php

namespace Database\Factories;

use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = ['queue', 'serving', 'finished', 'canceled'];
        $date = fake()->dateTimeBetween('-7 days', '+7 days');
        return [
            'booking_id' => $date->format('dmy'),
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'arrival_time' => fake()->dateTimeBetween('08:00', '18:00')->format('H:i:s'),
            'arrival_date' => $date->format('Y-m-d'),
            'total_price' => rand(10000, 100000),
            'status' => $status[array_rand($status, 1)],
            'branch_id' => rand(1, 3)
        ];
    }
}
