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
                'price' => 25000
            ],
            [
                'name' => 'Washing',
                'price' => 15000
            ],
            [
                'name' => 'Shaves',
                'price' => 10000
            ],
            [
                'name' => 'Kids',
                'price' => 20000
            ],
        ])->each(fn ($service) => Service::create($service));
    }
}
