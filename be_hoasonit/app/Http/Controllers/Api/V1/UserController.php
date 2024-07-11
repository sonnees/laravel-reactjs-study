<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\UserFilter;
use App\Http\Controllers\Api\Controller;
use App\Http\Requests\V1\StoreUserRequest;
use App\Http\Resources\V1\UserCollection;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $filter = new UserFilter();
        $filterItems = $filter->transform($request); //[['column','operation','value']]
        $includeProduct = $request->query('includeProduct');
        Log::info($filterItems);

        $users = User::where($filterItems);

        if ($includeProduct) {
            $users = $users->with('products');
        }
        return new UserCollection($users -> paginate() -> appends($request->query()));
    }


    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $includeProduct = request("includeProduct");
        if($includeProduct){
            $user->loadMissing('products');
        }
        return new UserResource($user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        Log::info($request->all());
        return new UserResource(User::create($request->validated()));
    }
}

?>