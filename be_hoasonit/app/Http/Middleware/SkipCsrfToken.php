<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SkipCsrfToken
{
    public function handle(Request $request, Closure $next)
    {
        $request->attributes->set('skip-csrf', true);
        return $next($request);
    }
}
