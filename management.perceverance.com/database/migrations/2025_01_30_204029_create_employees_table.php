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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string("emp_name");
            $table->date("emp_dob");
            $table->string("emp_pob");
            $table->string("residence");
            $table->string("job");
            $table->string("Work_days");
            $table->double("pay_rate");
            $table->text("emp_desc");
            $table->text("emp_pic_path");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
