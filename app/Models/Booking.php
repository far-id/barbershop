<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Booking extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'booking_id',
        'name',
        'email',
        'branch_id',
        'arrival_time',
        'arrival_date',
        'comment',
        'total_price',
        'status',
    ];

    protected function bookingId(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => intval($value),
            set: fn ($value) => str($value)->limit(6, null) . 1 + self::where('booking_id', 'like', str($value)->limit(6, null) . '%')->count()
        );
    }

    /**
     * belongsTo relationship to Branch class
     *
     
     * @return belongsTo
     */
    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * belongsToMany relationship to Service class
     *
     * @return BelongsToMany
     */
    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class);
    }
}
