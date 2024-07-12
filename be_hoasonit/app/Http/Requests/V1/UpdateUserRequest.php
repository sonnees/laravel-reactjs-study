<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use PgSql\Lob;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return auth()->user() != null;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        if($method == "PUT"){
            return [
                // 'enum' => ['required', Rule::in(['I',])],
                'name' => ['required'],
                'email' => ['required', 'email', 'unique:users,email'],
                'password' => ['required', 'string', 'min:6'],
            ];
        } 
        else{
            return [
                // 'enum' => ['required', Rule::in(['I',])],
                'name' => ['sometimes', 'required'],
                'email' => ['sometimes', 'required', 'email', 'unique:users,email'],
                'password' => ['sometimes', 'required', 'string', 'min:6'],
            ];
        }
        
    }

    // protected function prepareForValidation()
    // {
    //    $this -> merge([
    //     'name dbs' => $this -> name obj
    //    ]);
    // }


}
