<?php

use App\Models\Tema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temas', function (Blueprint $table) {
            $table->id();
            $table->string("temanev");
            $table->timestamps();
        });

        Tema::create(["temanev" => "tema1"]);
        Tema::create(["temanev" => "tema2"]);
        Tema::create(["temanev" => "tema3"]);
        Tema::create(["temanev" => "tema4"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temas');
    }
};
