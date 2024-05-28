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
        Schema::create('workshops', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('date');
            $table->text('detail');
            $table->string('img_path');
            $table->unsignedBigInteger('workshop_major_id');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('workshop_major_id')->references('id')->on('workshop_majors');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workshops');
    }
};
