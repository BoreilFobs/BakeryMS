@extends('layouts.pages')
@section('title', 'OFFERS')
@section('content')
                {{-- here is where my content enter..... --}}

                <div class="order-block block">
                  <div class="order">
                    <div  class="message d-flex align-items-center">
                      <div class="profile">
                        <img
                          src="img/avatar-3.jpg"
                          alt="..."
                          class="img-fluid"
                        />
                      </div>
                      <div class="content d-flex justify-content-between align-items-center w-100">
                        <div class="item">
                            <strong class="d-block">Nadia Halsey</strong>
                            <small class="date d-block">9:30am</small>
                        </div>
                        <div class="item">
                            <div class="amount">20,000FCFA</div>
                        </div>
                        <div class="item">
                            <div class="status delivered">Delivered</div>
                        </div>
                        <div class="item">
                            <a href="{{url("/orders/1/details")}}" class=" btn btn-warning">Comand's Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            {{-- next card --}}
                <div class="order-block block">
                  <div class="order">
                    <div  class="message d-flex align-items-center">
                      <div class="profile">
                        <img
                          src="img/avatar-3.jpg"
                          alt="..."
                          class="img-fluid"
                        />
                      </div>
                      <div class="content d-flex justify-content-between align-items-center w-100">
                        <div class="item">
                            <strong class="d-block">Nadia Halsey</strong>
                            <small class="date d-block">9:30am</small>
                        </div>
                        <div class="item">
                            <div class="amount">20,000FCFA</div>
                        </div>
                        <div class="item">
                            <div class="status in-process">in-process</div>
                        </div>
                        <div class="item">
                            <a href="{{url("/orders/1/details")}}" class=" btn btn-warning">Comand's Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            {{-- end of card --}}
@endsection
