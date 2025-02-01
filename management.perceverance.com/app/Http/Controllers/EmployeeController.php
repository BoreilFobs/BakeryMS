<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    //
    public function index(){
        return view('employeeForm');
    }
    public function store(Request $request){

         $request->validate([
            'emp_name' => 'required',
            'residence' => 'required',
            'job' => 'required',
            'rest_day' => 'required',
            'pay_rate' => 'required|integer',
            'emp_dob' => 'nullable',
            'emp_pob' => 'nullable',
            'emp_desc' => 'nullable',
            'emp_pic' => 'nullable|max:3072'
        ]);

        // handle image upload

        if($request->hasFile('emp_pic')){
            $img_path = $request->file('emp_pic')->store("/img/employee's profile", 'public');
        }


        Employee::create([
            'emp_name' => $request->emp_name,
            'emp_dob' => $request->emp_dob,
            'emp_pob' => $request->emp_pob,
            'emp_desc' => $request->emp_desc,
            'residence' => $request->residence,
            'rest_day' => $request->rest_day,
            'job' => $request->job,
            'pay_rate' => $request->pay_rate,
            // 'emp_pic_path' => $img_path,
        ]);
        return redirect('/employees')->with('success', 'Employee created successfully');
    }
}
