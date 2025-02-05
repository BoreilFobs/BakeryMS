<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EmployeeController extends Controller
{
    //
    public function index(){
        $employees = Employee::all();
        return view('employee.index', compact('employees'));
    }
    public function show($id){
        $employee = Employee::findOrFail($id);
        return view('employee.show', compact('employee'));
    }
    public function form(){
       return view('employee.form');
    }
    public function formEdit($id) {
        $employee = Employee::findOrFail($id);
        return view('employee.form', compact('employee'));
    }

    public function store(Request $request){

         $request->validate([
            'emp_name' => 'required',
            'residence' => 'required',
            'job' => 'required',
            'pay_rate' => 'required|integer',
            'emp_dob' => 'required',
            'emp_pob' => 'nullable',
            'emp_pic' => 'nullable|max:2048',
            'experience' => 'required',

        ]);

        // handle image upload

         if($request->file('emp_pic')){
            $img_path = $request->file('emp_pic')->store('emp_profile_pics', 'public');
            $img_url = Storage::url($img_path);
        }


        if($request->file('emp_pic')){
            Employee::create([
                'emp_name' => $request->emp_name,
                'emp_dob' => $request->emp_dob,
                'emp_pob' => $request->emp_pob,
                'residence' => $request->residence,
                'job' => $request->job,
                'pay_rate' => $request->pay_rate,
                'experience' => $request->experience,
                'emp_pic_path' => $img_url
            ]);
        }else{
             Employee::create([
                'emp_name' => $request->emp_name,
                'emp_dob' => $request->emp_dob,
                'emp_pob' => $request->emp_pob,
                'residence' => $request->residence,
                'job' => $request->job,
                'pay_rate' => $request->pay_rate,
                'experience' => $request->experience
            ]);
        }
        return redirect('/employees')->with('success', 'Employee created successfully');
    }


    public function update(Request $request, $id){


         $request->validate([
            'emp_name' => 'required',
            'residence' => 'required',
            'job' => 'required',
            'pay_rate' => 'required|integer',
            'emp_dob' => 'required',
            'emp_pob' => 'nullable',
            'emp_pic' => 'nullable|max:2048',
            'experience' => 'required',

        ]);

        // handle image upload
        $employee = Employee::findOrFail($id);
        if($request->file('emp_pic')){
            if ($employee->emp_pic_path){
                Storage::delete($employee->emp_pic_path);
            }
            $img_path = $request->file('emp_pic')->store('emp_profile_pics', 'public');
            $img_url = Storage::url($img_path);
        }

        if($request->file('emp_pic')){
            Employee::findOrFail($id)->update([
                'emp_name' => $request->emp_name,
                'emp_dob' => $request->emp_dob,
                'emp_pob' => $request->emp_pob,
                'residence' => $request->residence,
                'job' => $request->job,
                'pay_rate' => $request->pay_rate,
                'experience' => $request->experience,
                'emp_pic_path' => $img_url
        ]);
        }else{
             Employee::findOrFail($id)->update([
                'emp_name' => $request->emp_name,
                'emp_dob' => $request->emp_dob,
                'emp_pob' => $request->emp_pob,
                'residence' => $request->residence,
                'job' => $request->job,
                'pay_rate' => $request->pay_rate,
                'experience' => $request->experience,
        ]);
        }
        return redirect('/employees')->with('success', 'Employee updated successfully');
    }
    public function delete($id){
         $employee = Employee::findOrFail($id);
            if ($employee->emp_pic_path){
                Storage::delete($employee->emp_pic_path);
            }
        $employee->delete();
        return redirect('/employees')->with('success', 'Employee deleted successfully');
    }
     public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}
