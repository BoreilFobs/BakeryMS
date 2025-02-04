<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    //
     public function index(Request $request){
        $orders = Order::all();
        $customer = Customer::all();
        if($request->is('api/*')){
            return response()->json($orders);
        }else{
            return view('order.index', compact('orders', 'customer'));
        }
    }
    public function show(Request $request, $id){
        $orders = Order::where('cust_id', '=', $id)->get();
        foreach($orders as $order){
            $name = Customer::findOrFail($id)->cust_name;
        }
        if($request->is('api/*')){
            return response()->json($orders);
        }else{
            return view('order.detail', compact('orders'));
        }
    }

    public function store(Request $request){

         $request->validate([
            'cust_id' => 'required|numeric',
            'offer_id' => 'required|numeric',
            'quantity' => 'required|numeric',
        ]);

           $order =  Order::create([
                'cust_id' => $request->cust_id,
                'offer_id' => $request->offer_id,
                'quantity' => $request->quantity,
            ]);

        return response()->json(['message', 'Order Created Successfully!'], $order);
    }


    public function update(Request $request, $id){


         $request->validate([
            'cust_id' => 'required|numeric',
            'offer_id' => 'required|numeric',
            'quantity' => 'required|numeric',
         ]);

       $order = Order::findOrFail($id)->update([
            'cust_id' => $request->cust_id,
            'offer_id' => $request->offer_id,
            'quantity' => $request->quantity,
            ]);

        return response()->json(['message', 'Order Updated Successfully!'], $order);
    }
    public function delete($id){
        Order::findOrFail($id)->delete();
        return response()->json(['message', 'Order Deleted Successfully!'], null);
    }

}
