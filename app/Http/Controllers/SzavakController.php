<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function osszSzoTemaNevvel()
    {
        return response()->json(DB::select(Db::raw("
            select angol, magyar, temanev
            from szavaks s inner join temas t on s.temaId = t.id
        ")));
    }

    public function osszSzo()
    {
        return response()->json(Szavak::all());
    }

    public function adottTemabanLevoSzavak($id)
    {
        return response()->json(DB::select(Db::raw("
            select angol, magyar, temanev
            from szavaks s inner join temas t on s.temaId = t.id
            where t.id = $id
        ")));
    }
}
