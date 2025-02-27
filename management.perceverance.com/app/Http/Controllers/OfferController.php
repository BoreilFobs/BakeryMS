<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OfferController extends Controller
{
    //
    public function index(Request $request)
    {
        $offers = Offer::all();
        if ($request->is('api/*')) {
            return response()->json($offers);
        } else {
            return view('offer.index', compact('offers'));
        }
    }
    public function show($id)
    {
        $offer = Offer::findOrFail($id);
        return view('offer.show', compact('offer'));
    }
    public function form()
    {
        return view('offer.form');
    }
    public function formEdit($id)
    {
        $offer = Offer::findOrFail($id);
        return view('offer.form', compact('offer'));
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'mass' => 'required|numeric',
            'offer_pic' => 'required|max:2048',
        ]);

        // handle image upload

        if ($request->file('offer_pic')) {
            $img_path = $request->file('offer_pic')->store('offer_pics', 'public');
            $img_url = Storage::url($img_path);
        }


        if ($request->file('offer_pic')) {
            Offer::create([
                'name' => $request->name,
                'price' => $request->price,
                'mass' => $request->mass,
                'offer_pic_path' => $img_url
            ]);
        } else {
            Offer::create([
                'name' => $request->name,
                'price' => $request->price,
                'mass' => $request->mass,
            ]);
        }
        return redirect('/offers')->with('success', 'offer created successfully');
    }


    public function update(Request $request, $id)
    {


        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'mass' => 'required|numeric',
            'offer_pic' => 'max:2048'
        ]);

        // handle image upload
        $offer = Offer::findOrFail($id);
        if ($request->file('offer_pic')) {
            if ($offer->offer_pic_path) {
                Storage::delete($offer->offer_pic_path);
            }
            $img_path = $request->file('offer_pic')->store('offer_pics', 'public');
            $img_url = Storage::url($img_path);
        }

        if ($request->file('offer_pic')) {
            Offer::findOrFail($id)->update([
                'name' => $request->name,
                'price' => $request->price,
                'mass' => $request->mass,
                'offer_pic_path' => $img_url
            ]);
        } else {
            Offer::findOrFail($id)->update([
                'name' => $request->name,
                'price' => $request->price,
                'mass' => $request->mass,
            ]);
        }
        return redirect('/offers')->with('success', 'Offer updated successfully');
    }
    public function delete($id)
    {
        $order = Order::where('offer_id', $id);
        $order->delete();
        $offer = Offer::findOrFail($id);
        if ($offer->emp_pic_path) {
            Storage::delete($offer->emp_pic_path);
        }
        $offer->delete();
        return redirect('/offers')->with('success', 'Offer deleted successfully');
    }
}
