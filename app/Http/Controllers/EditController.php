<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EditController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function view($id) {
        $todo = auth()->user()->todos()->where("id", $id)->first();

        return Inertia::render("EditTodo", [
            "id" => $id,
            "title" => $todo->title,
            "description" => $todo->description
        ]);
    }

    public function update(Request $request) {
        $data = $request->validate([
            "title" => "required",
            "description" => "required",
            "id" => "required"
        ]);

        $todo = auth()->user()->todos()->where("id", $request->id)->first();

        $todo->title = $data["title"];
        $todo->description = $data["description"];
        $todo->save();

        return redirect()->route("dashboard");
    }
}
