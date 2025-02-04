@extends('layouts.pages')
@section('title', $employee->emp_name)
@section('content')

{{-- here is where my content enter..... --}}

<div class="main d-flex justify-content-center align-items-center">
    <div class="block empshow m-4 d-flex my-5 py-5 position-relative justify-content-around">
    <img src="{{$employee->emp_pic_path}}" class="w-50 rounded" alt="employee picture">
    <div class="details m-5">
        <div class="info">Name: <strong>{{$employee->emp_name}}</strong></div>
        <div class="info">Age: <strong>{{\Carbon\Carbon::parse($employee->emp_dob)->age}}</strong></div>
        <div class="info">Born at: <strong>{{$employee->emp_pob}}</strong></div>
        <div class="info">Residence: <strong>{{$employee->residence}}</strong></div>
        <div class="info">Experience: <strong>{{$employee->experience}}</strong></div>
        <div class="info">Pay rate: <strong>{{$employee->pay_rate}}</strong></div>
    </div>
     <div class="actions d-flex">
        <a href="{{url('/employees/'. $employee->id .'/edit')}}" class="btn btn-warning">Edit<i class="fa-solid m-2 fa-file-pen"></i></a>
        <a href="{{url('/employees/'. $employee->id .'/delete')}}" class="btn btn-danger">Delete <i class="fa-solid m-2 fa-trash-can"></i></a>
    </div>
</div>
</div>
@endsection
