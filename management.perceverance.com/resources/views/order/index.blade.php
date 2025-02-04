@extends('layouts.pages')
@section('title', 'ORDERS')
@section('content')
                {{-- here is where my content enter..... --}}
@if ($orders->isEmpty())
    <p>No Order Placed</p>
@endif
@foreach ($orders as $order)
<div class="order-block block">
  <div class="order">
    <div  class="message d-flex align-items-center">
      <div class="profile">
        <img
          src="{{App\Models\Customer::findOrFail($order->cust_id)->cust_pic_path}}"
          alt="Customer profile"
          class="img-fluid"
        />
      </div>
      <div class="content d-flex justify-content-between align-items-center w-100">
        <div class="item">
            <strong class="d-block">{{App\Models\Customer::findOrFail($order->cust_id)->cust_name}}</strong>
            <small class="date d-block">{{Carbon\Carbon::parse($order->time)->timezone('Europe/Paris')->format('H:i:s')}}</small>
        </div>
        <div class="item">
            <div class="amount">{{App\Models\Offer::findOrFail($order->offer_id)->price * $order->quantity}}XAF</div>
        </div>
        <div class="item">
            <div class="status {{$order->status}}">{{$order->status}}</div>
        </div>
        <div class="item">

        </div>
      </div>
    </div>
  </div>
</div>
@endforeach
@endsection
