<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;

        // return auth()->user()->role === 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'enum' => ['required', Rule::in(['I',])],
            'name' => ['required'],
            'email' => ['required|email|unique:users,email'],
            'password' => ['required|string|min:6'],
        ];
    }

    // protected function prepareForValidation()
    // {
    //    $this -> merge([
    //     'name dbs' => $this -> name obj
    //    ]);
    // }


}
