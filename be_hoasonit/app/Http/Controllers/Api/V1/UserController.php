<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\UserFilter;
use App\Http\Controllers\Api\Controller;
use App\Http\Requests\V1\StoreUserRequest;
use App\Http\Requests\V1\UpdateUserRequest;
use App\Http\Resources\V1\UserCollection;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use App\Services\V1\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * @OA\Info(title="API", version="1.0.0")
 */
class UserController extends Controller
{
    protected $userService;
    
    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    /**
     * @OA\Get(
     *     path="/api/v1/user",
     *     summary="Get list of users",
     *     @OA\Parameter(
     *         name="includeProduct",
     *         in="query",
     *         description="Include related products",
     *         required=false,
     *         @OA\Schema(type="boolean")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request"
     *     )
     * )
     */
    public function index(Request $request){

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
    public function show(User $user){
        $includeProduct = request("includeProduct");
        if($includeProduct){
            $user->loadMissing('products');
        }
        return new UserResource($user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request){
        Log::info($request->all());
        return new UserResource(User::create($request->validated()));
    }

    public function update(UpdateUserRequest $request, User $user){
        $user->update($request->validated());
        return response()->json($user);
    }

    public function destroy($id){
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(null, 204);
    }

    public function test($id){
        Log::info($this->userService->func_1($id));
    }
}

?>