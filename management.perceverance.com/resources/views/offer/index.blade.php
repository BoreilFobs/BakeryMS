@extends('layouts.pages')
@section('title', 'OFFERS')
@section('content')
{{-- here is where my content enter..... --}}
@if (session()->has('success'))
    <div class="alert alert-success success">{{ session('success') }}</div>
@endif
<div class="offers row">
    @if ($offers->isEmpty())
        <p>No Offer Yet</p>
    @endif
    @foreach ($offers as $offer)
    <div class="col-md-6">
        <div class="block position-relative h-auto">
            <img src="{{$offer->offer_pic_path}}" class="w-100 h-75 mb-4" alt="offr-img">
            <div class="offer-name position-absolute" style="bottom: 10px; right: 35px; background: transparent;  padding: 5px 10px; border-radius: 4px;">
                <strong style="font-size: 25px; font-family: cursive;">{{$offer->name}}</strong>
            </div>
            <div class="details d-flex justify-content-around">
                <div class="price"><strong>Price: </strong><b>{{$offer->price}}<small>fcfa</small></b></div>
                <div class="qty"><strong>Weight: </strong><b>{{$offer->mass}}<small>Kg</small></b></div>
            </div>
            <div class="actions d-flex">
                <a href="{{url('/offers/' .$offer->id. '/edit')}}" class="btn btn-warning">Edit<i class="fa-solid m-2 fa-file-pen"></i></a>
                <a href="{{url('/offers/' .$offer->id. '/delete')}}" class="btn btn-danger">Delete <i class="fa-solid m-2 fa-trash-can"></i></a>
            </div>
        </div>
    </div>

    @endforeach
</div>
@endsection
