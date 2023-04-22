import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";

const EditTodo = ({ auth, id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Todo
                </h2>
            }
        >
            <Head title="Edit Todo" />
            <div className={"flex flex-col justify-center items-center mt-10"}>
                <div
                    className={
                        "flex flex-row w-full items-center justify-center p-5"
                    }
                >
                    <div className={"flex flex-col w-6/12"}>
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
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder={"Enter title"}
                            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 mt-2 text-gray-700 text-xl focus:border-indigo-500 focus:outline-none focus:ring"
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
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder={"Enter description"}
                            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 mt-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring"
                        />

                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-10"
                            onClick={(e) => {
                                e.preventDefault();
                                axios
                                    .post(`/edit-todo/${id}`, {
                                        title: newTitle,
                                        description: newDescription,
                                        id,
                                    })
                                    .then((res) => {
                                        if (res.status === 200) {
                                            window.location.href = "/dashboard";
                                        }
                                    })
                                    .catch((err) => console.log(err));
                            }}
                        >
                            Update
                        </button>
                    </div>
                </div>

                <Link href={"/dashboard"} className={"mt-5 text-indigo-500"}>
                    {"<"} Back to dashboard
                </Link>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditTodo;
