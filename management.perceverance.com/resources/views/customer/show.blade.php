@extends('layouts.pages')
@section('title', $customer->cust_name)
@section('content')

{{-- here is where my content enter..... --}}
<a href="{{url('/customers/'. $customer->id .'/edit')}}" class="btn btn-warning">Edit Customer's profile</a>
<a href="{{url('/customers/'. $customer->id .'/delete')}}" class="btn btn-danger">Delet Customer</a>
@endsection
