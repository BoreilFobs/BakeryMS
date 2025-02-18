@extends('layouts.pages')
@section('title', "COMPOSITION INGREDIENTS FOR A KG OF BREAD")
@section('content')
@if (session()->has('success'))
    <div class="alert alert-success success">{{ session('success') }}</div>
@endif
 <div class="row">
    @if ($ingredients->isEmpty())
        <p>No ingredient yet</p>
    @endif
    @foreach ($ingredients as $ingredient)
    <div class="col-lg-4">
        <div class="stats-with-chart-2 block">
            <div class="title d-flex justify-content-between align-items-center">
                <div>
                    <strong class="d-block">{{$ingredient->name}}</strong>
                    <span class="d-block"></span>
                </div>
                <a href="{{ url('/ingredients/'.$ingredient->id.'/edit') }}" class="btn" style="background-color: #dc8b35; color: #fff; transition: all 0.3s ease;">Edit</a>
            </div>
            <div class="piechart chart">
                <canvas id="ratio{{$ingredient->id}}"></canvas>
                <div class="text"><strong class="d-block">{{$ingredient->quantity}}</strong><span class="d-block">{{$ingredient->unit}}</span></div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <a href="{{ url('/ingredients/'.$ingredient->id.'/delete') }}" class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
    @endforeach
</div>

@endsection
