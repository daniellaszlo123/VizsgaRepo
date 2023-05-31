<?php

use App\Models\Szavak;
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
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string("angol");
            $table->string("magyar");
            $table->foreignId("temaId")->references("id")->on("temas");
            $table->timestamps();
        });

        Szavak::create(["angol" => "beautiful", "magyar" => "gyönyörű", "temaId" => 1]);
        Szavak::create(["angol" => "keyboard", "magyar" => "billentyűzet", "temaId" => 2]);
        Szavak::create(["angol" => "curious", "magyar" => "kíváncsi", "temaId" => 2]);
        Szavak::create(["angol" => "desk", "magyar" => "asztal", "temaId" => 3]);
        Szavak::create(["angol" => "chair", "magyar" => "szék", "temaId" => 4]);
        Szavak::create(["angol" => "mouse", "magyar" => "egér", "temaId" => 1]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szavaks');
    }
};
