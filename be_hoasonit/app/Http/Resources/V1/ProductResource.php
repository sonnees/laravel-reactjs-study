<?php

namespace App\Http\Resources\V1;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this -> id,
            'user_id' => $this ->user_id,
            'name' => $this ->name,
            'description' => $this ->description,
            'url' => $this ->url,
            'date' => $this ->date,
        ];
    }
}
