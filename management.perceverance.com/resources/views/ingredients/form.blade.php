@extends('layouts.pages')
@section('title', "ADD INGREDIENTS")
@section('content')
 @if ($errors->any())
                 @foreach ($errors->all() as $error)

                    <div class="content">
                        <div
                        class="alert alert-danger error"
                        role="alert"
                    >
                        <strong>{{ $error }}</strong>
                    </div>
                 @endforeach

@endif
<div class="block">
<form method="POST" action="{{ Str::contains(request()->url(), '/edit') ? url('ingredients/'. $ingredient->id .'/editData')  : url('ingredients/create') }} ">
    @csrf
     @if (Str::contains(request()->url(), '/edit'))
         @method('put')
     @endif
    <div class="d-grid">
        <div class="form-group">
            <label class="form-control-label">ingredient's name</label>
            <input type="text" value="{{Str::contains(request()->url(), '/edit') ? $ingredient->name  : old('ing_name')}}" name="ing_name" placeholder="ingredient's name" class="form-control">
        </div>
        <div class="form-group">
            <label class="form-control-label">Quantity required to yield 1kg of bread</label>
            <input type="number" step="0.0001" value="{{Str::contains(request()->url(), '/edit') ? $ingredient->quantity  : old("quantity")}}" name="quantity" placeholder="quantity to produce 1Kg" class="form-control">
        </div>
        <div class="form-group">
            <label class="form-control-label">Unit of measurment</label>
            {{-- <input type="number" value="{{Str::contains(request()->url(), '/edit') ? $ingredient->unit  : old("ing_qty")}}" name="eng_qty" placeholder="unit of measurment" class="form-control"> --}}
            <select name="unit" value="{{Str::contains(request()->url(), '/edit') ? $ingredient->unit  : old("unit")}}" class="form-control w-50"  id="">
                <option value="kilogram">--------------------------- select a unit of measurement ----------------------------------</option>
                <option value="kilogram">Kilogram</option>
                <option value="liter">liter</option>
                <option value="gram">gram</option>
            </select>
        </div>
        <button class="btn btn-success mt-4">{{Str::contains(request()->url(), '/edit') ? "Edit"  : 'Create'}}</button>

    </div>
</form>
</div>

@endsection
