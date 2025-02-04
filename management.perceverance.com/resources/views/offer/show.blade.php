@extends('layouts.pages')
@section('title', $offer->emp_name)
@section('content')

{{-- here is where my content enter..... --}}
<a href="{{url('/offers/'. $offer->id .'/edit')}}" class="btn btn-warning">Edit Offer's profile</a>
<a href="{{url('/offers/'. $offer->id .'/delete')}}" class="btn btn-danger">Delete Offer</a>
@endsection
