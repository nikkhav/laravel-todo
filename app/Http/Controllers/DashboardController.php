<?php

namespace App\Http\Controllers;


use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show() {
        return Inertia::render('Dashboard', [
            'todos' => auth()->user()->todos()->get()
        ]);
    }
}
