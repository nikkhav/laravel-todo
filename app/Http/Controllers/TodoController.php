<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{

    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        return Inertia::render("CreateTodo");
    }

    public function store(Request $request) {
        $data = $request->validate([
            "title" => "required",
            "description" => "required",
        ]);

        auth()->user()->todos()->create([
            "title" => $data["title"],
            "description" => $data["description"]
        ]);
         return redirect()->route("dashboard");

    }

    public function getAllTodos() {
        $todos = auth()->user()->todos()->get();
        return Inertia::render("Dashboard", [
            "todos" => $todos
        ]);
    }

    public function delete(Request $request, $id) {
        $todo = auth()->user()->todos()->where("id", $id)->first();
        $todo->delete();

       return redirect()->route("dashboard");
    }


}
