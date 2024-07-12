<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this ->id,
            'name' => $this ->name,
            'email' => $this ->email,
            'role' => $this ->role,
            'email_verified_at' => $this ->email_verified_at,
            'created_at' => $this ->created_at,
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
