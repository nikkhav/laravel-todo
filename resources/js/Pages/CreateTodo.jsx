import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { Head } from "@inertiajs/react";

const CreateTodo = ({ auth }) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
    });
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create todo
                </h2>
            }
        >
            <Head title="Create todo" />
            <div className="flex flex-col justify-center items-center py-12">
                <form className={"w-6/12"} method={"post"}>
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="text-gray-700 text-xl dark:text-gray-200"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={form.title}
                            onChange={(e) =>
                                setForm({ ...form, title: e.target.value })
                            }
                            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 mt-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring"
                        />

                        <label
                            htmlFor="description"
                            className="text-gray-700 text-xl mt-10 dark:text-gray-200"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            value={form.description}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    description: e.target.value,
                                })
                            }
                            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 mt-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring"
                        />

                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-10"
                            onClick={(e) => {
                                e.preventDefault();
                                axios.post("/create-todo", form).then((res) => {
                                    res.status === 200
                                        ? Inertia.visit("/dashboard")
                                        : console.log(res);
                                });
                            }}
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateTodo;
