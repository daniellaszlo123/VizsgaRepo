<?php

use App\Http\Controllers\SzavakController;
use App\Http\Controllers\TemaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/api/szavak", [SzavakController::class, "osszSzoTemaNevvel"]);
Route::get("/api/tema", [TemaController::class, "osszTema"]);
Route::get("/api/szavak/tema/{id}", [SzavakController::class, "adottTemabanLevoSzavak"]);

Route::get('/', function () {
    return view('fooldal');
});
