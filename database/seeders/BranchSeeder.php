<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Ciracas',
                'address' => 'Jl. Pengantin Ali No.12, Kec. Ciracas, Kota Jakarta Timur.'
            ],
            [
                'name' => 'Cibubur',
                'address' => 'Jl. Legenda Wisata, Cibubur, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat.'
            ],
            [
                'name' => 'Condet',
                'address' => 'Jl. Raya Condet No.4, Kec. Kramat jati, Kota Jakarta Timur..'
            ]
        ])->each(fn ($branch) => Branch::create($branch));
    }
}
