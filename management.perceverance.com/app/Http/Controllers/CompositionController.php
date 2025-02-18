<?php

namespace App\Http\Controllers;

use App\Models\ingredients;
use App\Models\Offer;
use App\Models\Order;
use Illuminate\Http\Request;

class CompositionController extends Controller
{
    //
    public function index(){
        $ingredients = ingredients::all();
        $orders = Order::all();

        //determine the ratio of production

        $quantity = [];
        foreach ($ingredients as $ingredient) {
            array_push($quantity, $ingredient->quantity);
        }

        // summing up all orders of the day
        $total_mass = 0;
        foreach ($orders as $order) {
            $id = $order->offer_id;
            $offer = Offer::findOrFail($id);
            $total_mass = $total_mass + $order->quantity * $offer->mass;
        }
        return view("composition.index", compact('total_mass', 'ingredients', 'quantity'));
    }
}
