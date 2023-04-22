<?php

use App\Http\Controllers\EditController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/dashboard", [TodoController::class, "getAllTodos"])->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/create-todo", [TodoController::class, "index"])->middleware(['auth', 'verified'])->name('view-todos');
Route::post("/create-todo", [TodoController::class, "store"])->middleware(['auth', 'verified'])->name('create-todo');
Route::post("/delete-todo/{id}", [TodoController::class, "delete"])->middleware(['auth', 'verified'])->name('delete-todo');

Route::get("/edit-todo/{id}", [EditController::class, "view"])->middleware(['auth', 'verified'])->name('edit-todo-view');
Route::post("/edit-todo/{id}", [EditController::class, "update"])->middleware(['auth', 'verified'])->name('edit-todo');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
