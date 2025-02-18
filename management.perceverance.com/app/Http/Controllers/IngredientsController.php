<?php

namespace App\Http\Controllers;

use App\Models\ingredients;
use Illuminate\Http\Request;

class IngredientsController extends Controller
{
    //
    public function index(Request $request){
        $ingredients = ingredients::all();
        $quantity = [];
        foreach ($ingredients as $ingredient) {
            array_push($quantity,["id" => $ingredient->id, "name" => $ingredient->name, "quantity" => $ingredient->quantity]);
        }
        if($request->is('api/*')){
            return response()->json($quantity);
        }else{
            return view('ingredients.index', compact('ingredients', 'quantity'));
        }
    }
     public function form(){
       return view('ingredients.form');
    }
    public function store(Request $request){
        $request->validate([
            "ing_name" => "required",
            "unit" => "required",
            "quantity" => "required|numeric"
        ]);


        //create the ingredient

        ingredients::create([
            'name' => $request->ing_name,
            'quantity' => $request->quantity,
            'unit' => $request->unit
        ]);

        return redirect("/ingredients")->with('success', 'Ingredient created successfully');
    }
    public function formEdit($id) {
        $ingredient = ingredients::findOrFail($id);
        return view('ingredients.form', compact('ingredient'));
    }

    // function to update

    public function update(Request $request, $id) {
        $request->validate([
            "ing_name" => "required",
            "unit" => "required",
            "quantity" => "required|numeric"
        ]);

        $ingredient = ingredients::findOrFail($id);

        $ingredient->update([
            'name' => $request->ing_name,
            'quantity' => $request->quantity,
            'unit' => $request->unit
        ]);

        return redirect("/ingredients")->with('success', 'Ingredient updated successfully');
    }

    // function to delete

    public function delete($id) {
        $ingredient = ingredients::findOrFail($id);
        $ingredient->delete();

        return redirect("/ingredients")->with('success', 'Ingredient deleted successfully');
    }
}
