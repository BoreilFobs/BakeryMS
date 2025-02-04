@extends('layouts.pages')
@section('title', 'EMPLOYEES')
@section('content')
@if (session()->has('success'))
    <div class="alert alert-success success">{{ session('success') }}</div>
@endif
    <div class="row">
        @if ($employees->isEmpty())
            <p>No employee found</p>
        @endif
        @foreach ($employees as $employee)

            <div class="col-lg-4">
            <div class="user-block block text-center">
                <div class="avatar">
                <img src="{{$employee->emp_pic_path}}" alt="..." class="img-fluid" />
                <div class="order dashbg-2">{{$employee->id}}</div>
            </div>
                <a href="{{url('employees/' .$employee->id. '/profile')}}" class="user-title">
                    <span>More About</span>
                    <h3 class="h5">{{$employee->emp_name}}</h3>
                </a>
                <div class="contributions">{{$employee->job}}</div>
                <div class="details d-flex align-items-center">
                <div class="item">
                    <i class="icon-info"></i><b>{{\Carbon\Carbon::parse($employee->emp_dob)->age}} old</b>
                </div>
                <div class="item">
                    <i class="icon-flow-branch"></i><b>{{$employee->experience}} years experience</b>
                </div>
                </div>
            </div>
            </div>
        @endforeach
    </div>
@endsection
