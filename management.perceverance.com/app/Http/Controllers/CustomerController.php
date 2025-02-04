<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{
    //
     public function index(Request $request){
        $customers = Customer::all();
        if($request->is('api/*')){
            return response()->json($customers);
        }else{
            return view('customer.index', compact('customers'));
        }
    }
    public function show(Request $request, $id){
        $customer = Customer::findOrFail($id);
        if($request->is('api/*')){
            return response()->json($customer);
        }else{
            return view('customer.show', compact('customer'));
        }
    }
    public function formEdit($id) {
        $customer = Customer::findOrFail($id);
        return response()->json($customer);
    }

    public function store(Request $request){

         $request->validate([
            'cust_name' => 'required',
            'cust_pic' => 'nullable|max:2048',
            'password' => 'required',
        ]);

        // handle image upload

         if($request->file('cust_pic')){
            $img_path = $request->file('cust_pic')->store('cust_profile_pics', 'public');
            $img_url = Storage::url($img_path);
        }


        if($request->file('cust_pic')){
         $customer = Customer::create([
                'cust_name' => $request->emp_name,
                'cust_pic_path' => $img_url,
                'password' => Hash::make($request->password)
            ]);
        }else{
             $customer = Customer::create([
               'cust_name' => $request->emp_name,
                'password' => Hash::make($request->password)
            ]);
        }
        return response()->json($customer);
    }


    public function update(Request $request, $id){


         $request->validate([
            'cust_name' => 'required',
            'cust_pic' => 'nullable|max:2048',
            'password' => 'required',

        ]);

        // handle image upload
        $customer = Customer::findOrFail($id);
        if($request->file('cust_pic')){
            if ($customer->cust_pic_path){
                Storage::delete($customer->cust_pic_path);
            }
            $img_path = $request->file('cust_pic')->store('cust_profile_pics', 'public');
            $img_url = Storage::url($img_path);
        }

        if($request->file('cust_pic')){
        $customer =  Customer::findOrFail($id)->update([
                'cust_name' => $request->emp_name,
                'cust_pic_path' => $img_url,
                'password' => Hash::make($request->password)
        ]);
        }else{
            $customer =  Customer::findOrFail($id)->update([
                'cust_name' => $request->emp_name,
                'password' => Hash::make($request->password)
        ]);
        }
        return response()->json($customer);
    }
    public function delete($id){
     $customer = Customer::findOrFail($id);
            if ($customer->emp_pic_path){
                Storage::delete($customer->emp_pic_path);
            }
       $customer->delete();
        return redirect('/customers')->with('success', 'customer deleted successfully');
    }


}
