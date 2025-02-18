@extends('layouts.pages')
@section('title', "TODAYE'S COMPOSITION FOR $total_mass kg of bread")
@section('content')

 <div class="row">
    @foreach ($ingredients as $ingredient)
    <div class="col-lg-4">
        <div class="stats-with-chart-2 block">
            <div class="title d-flex justify-content-between align-items-center">
                <div>
                    <strong class="d-block">{{$ingredient->name}}</strong>
                    <span class="d-block"></span>
                </div>
            </div>
            <div class="piechart chart">
                <canvas id="ratio{{$ingredient->id}}"></canvas>
                <div class="text"><strong class="d-block">{{$ingredient->quantity * $total_mass}}</strong><span class="d-block">{{$ingredient->unit}}</span></div>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endsection
