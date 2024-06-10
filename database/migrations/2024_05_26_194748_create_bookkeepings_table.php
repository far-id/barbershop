<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookkeepings', function (Blueprint $table) {
            $table->id();
            $table->string('booking_id')->unique();
            $table->string('name');
            $table->string('email');
            $table->time('arrival_time');
            $table->date('arrival_date');
            $table->string('branch_name');
            $table->string('services');
            $table->integer('total_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookkeepings');
    }
};
