<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Hair Cut',
                'price' => 25000,
                'image' => 'services/woman-cutting-hair-man-salon.jpg',
                'prime' => true
            ],
            [
                'name' => 'Washing',
                'price' => 15000,
                'image' => 'services/hairdresser-grooming-their-client.jpg',
                'prime' => true
            ],
            [
                'name' => 'Shaves',
                'price' => 10000,
                'image' => 'services/hairdresser-grooming-client.jpg',
                'prime' => true
            ],
            [
                'name' => 'Kids',
                'price' => 20000,
                'image' => 'services/boy-getting-haircut-salon-front-view.jpg',
                'prime' => true
            ],
        ])->each(fn ($service) => Service::create($service));
    }
}
