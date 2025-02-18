@extends('layouts.pages')
@section('title', "Detailed commande")
@section('content')
<div class="offers row">
@if ($orders->isEmpty())
    <p>No comande</p>
@endif
 @foreach ($orders as $order)
    <div class="col-md-6">
        <div class="block position-relative h-auto">
            <img src="{{App\Models\Offer::findOrFail($order->offer_id)->offer_pic_path}}" class="w-100 h-75 mb-4" alt="offr-img">
             <div class="offer-name position-absolute" style="top: 35px; right: 35px; background: rgba(0, 0, 0, 0.604);  padding: 5px 10px; border-radius: 4px;">
                <strong style="font-size: 25px; font-family: cursive;">{{App\Models\Offer::findOrFail($order->offer_id)->name}}</strong>
            </div>
            <div class="details d-flex justify-content-around">
                <div class="price"><strong>Price: </strong><b>{{App\Models\Offer::findOrFail($order->offer_id)->price}}<small>fcfa</small></b></div>
                <div class="qty"><strong>Quantity: </strong><b>{{$order->quantity}}<small>Pieces</small></b></div>
                <div class="cost"><strong>Cost: </strong><b>{{$order->quantity * App\Models\Offer::findOrFail($order->offer_id)->price}}<small>XAF</small></b></div>
            </div>
        </div>
    </div>

    @endforeach
</div>

@endsection
