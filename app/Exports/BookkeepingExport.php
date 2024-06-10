<?php

namespace App\Exports;

use App\Models\Bookkeeping;
use Maatwebsite\Excel\Concerns\FromCollection;

class BookkeepingExport implements FromCollection
{
    protected string $startDate;
    protected string $endDate;
    public function __construct(
        $startDate = null,
        $endDate = null
    ) {
        $this->startDate = $startDate ?? now()->subMonth()->format('Y-m-d');
        $this->endDate = $endDate ?? now()->format('Y-m-d');
    }

    public function query()
    {
        return Bookkeeping::whereBetween('created_at', [$this->startDate, $this->endDate]);
    }

    public function collection()
    {
        return $this->query()->get();
    }
}
