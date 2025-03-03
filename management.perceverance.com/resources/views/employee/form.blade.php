@extends('layouts.pages')
@section('title', Str::contains(request()->url(), '/edit') ? "Edit Employee's information" : 'Add New Employee')
@section('content')
    @if ($errors->any())
        @foreach ($errors->all() as $error)
            <div class="content">
                <div class="alert alert-danger error" role="alert">
                    <strong>{{ $error }}</strong>
                </div>
        @endforeach

    @endif
    {{-- here is where my content enter..... --}}
    <div class="block">
        <div class="title"><strong class="d-block">{{ Str::contains(request()->url(), '/edit') ? 'Edit' : 'Enter' }} the
                informations about the new employee </strong><span class="d-block"></span></div>
        <div class="block-body position-relative">
            <form method="post"
                action="{{ Str::contains(request()->url(), '/edit') ? url('employees/' . $employee->id . '/editData') : url('employees/create') }} "
                enctype="multipart/form-data">

                @csrf
                @if (Str::contains(request()->url(), '/edit'))
                    @method('put')
                @endif
                <div class="d-grid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-control-label">Employee's name</label>
                                <input type="text"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->emp_name : '' }}"
                                    name="emp_name" placeholder="Employee's name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Date of birth</label>
                                <input type="date"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->emp_dob : '' }}"
                                    name="emp_dob" placeholder="date 0f birth" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Place of birth</label>
                                <input type="text"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->emp_pob : '' }}"
                                    name="emp_pob" placeholder="Place of birth" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Employee's Residence</label>
                                <input type="text"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->residence : '' }}"
                                    name="residence" placeholder="e.g Ngousso" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Employee's Phone</label>
                                <input type="text"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->phone : '' }}"
                                    name="phone" placeholder="e.g 670000000" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-control-label">Employee's Job</label>
                                <input type="text"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->job : '' }}"
                                    name="job" placeholder="job" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Employee's Pay rate</label>
                                <input type="number"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->pay_rate : '' }}"
                                    name="pay_rate" placeholder="Pay" class="form-control" inputmode="numeric">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Employee's experience</label>
                                <input type="number"
                                    value="{{ Str::contains(request()->url(), '/edit') ? $employee->experience : '' }}"
                                    name="experience" placeholder="experience" class="form-control" inputmode="numeric">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Employee's Picture</label>
                                <input type="file" name="emp_pic" placeholder="Employee's picture" class="form-control">
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn btn-success mt-4">{{ Str::contains(request()->url(), '/edit') ? 'Edit' : 'Create' }}</button>
                </div>
            </form>
        </div>
    </div>
    </div>
@endsection
