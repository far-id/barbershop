<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookkeepingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'booking_id' => $this->booking_id,
            'name' => $this->name,
            'email' => $this->email,
            'arrival' => $this->arrival_time . ' ' . $this->arrival_date,
            'branch_name' => $this->branch_name,
            'services' => $this->services,
            'total_price' => $this->total_price,
            'created_at' => $this->created_at->format('d/m/Y')
        ];
    }
}
