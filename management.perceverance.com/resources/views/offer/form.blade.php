@extends('layouts.pages')
@section('title', Str::contains(request()->url(), '/edit') ? "Edit Offer's information" : "Add New offer")
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

                {{-- here is where my content enter..... --}}
              <div class="block">
                <div class="title"><strong class="d-block">{{Str::contains(request()->url(), '/edit') ? 'Edit' : 'Enter'}} the informations about the new offer </strong><span class="d-block"></span></div>
                  <div class="block-body position-relative">
                    <form method="post" action="{{ Str::contains(request()->url(), '/edit') ? url('offers/'. $offer->id .'/editData')  : url('offers/create') }} " enctype="multipart/form-data">
                        @csrf
                       @if (Str::contains(request()->url(), '/edit'))
                           @method('put')
                       @endif
                        <div class="d-grid">
                          <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-control-label">Offer's name</label>
                                  <input type="text" value="{{Str::contains(request()->url(), '/edit') ? $offer->name  : ''}}" name="name" placeholder="Offer's name" class="form-control">
                                </div>
                                <div class="form-group">
                                  <label class="form-control-label">Price</label>
                                  <input type="number" value="{{Str::contains(request()->url(), '/edit') ? $offer->price  : ''}}" name="price" placeholder="Price" class="form-control">
                                </div>
                                <div class="form-group">
                                  <label class="form-control-label">Mass</label>
                                  <input type="number" step="0.0001" value="{{Str::contains(request()->url(), '/edit') ? $offer->mass  : ''}}" name="mass" placeholder="mass" class="form-control">
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-control-label">Offer's Picture</label>
                                  <input type="file" name="offer_pic" placeholder="Offer's picture" class="form-control" {{ Str::contains(request()->url(), '/edit') ? ''  : 'required' }}>
                                </div>
                            </div>
                          </div>
                          <button class="btn btn-success mt-4">{{Str::contains(request()->url(), '/edit') ? "Edit"  : 'Create'}}</button>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
@endsection
