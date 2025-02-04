@extends('layouts.pages')
@section('title', 'CUSTOMERS')
@section('content')
                {{-- here is where my content enter..... --}}
        @if ($customers->isEmpty())
            <p>No Customer</p>
        @endif
        @foreach ($customers as $customer)
        <div class="public-user-block block">
          <div class="row d-flex align-items-center">
            <div class="col-lg-4 d-flex align-items-center">
              <div class="order">{{$customer->id}}</div>
              <div class="avatar">
                <img src="{{asset($customer->cust_pic_path)}}" alt="..." class="img-fluid" />
              </div>
              <a href="{{url('/customers/' .$customer->id. '/profile')}}" class="name"
                ><strong class="d-block">{{$customer->cust_name}}</strong
                ><span class="d-block">See Actions</span></a
              >
            </div>
            <div class="col-lg-4 text-center">
              <div class="contributions">{{$customer->num_orders}} Command passed</div>
            </div>
            <div class="col-lg-4">
              <div class="details d-flex">
              <a class="btn btn-warning" href="{{'/orders/' .$customer->id. '/details'}}">View his order</a>
              </div>
            </div>
          </div>
        </div>
        @endforeach
@endsection
