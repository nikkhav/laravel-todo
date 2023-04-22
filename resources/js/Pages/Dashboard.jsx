import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard({ auth, todos }) {
    // const [showNotification, setShowNotification] = useState(true);
    //
    // setTimeout(() => {
    //     setShowNotification(false);
    // }, 3000);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/*    {showNotification && (*/}
                    {/*        <div*/}
                    {/*            className={`bg-white  dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg transition-opacity ease-in-out duration-300 ${*/}
                    {/*                showNotification*/}
                    {/*                    ? ""*/}
                    {/*                    : "transition-opacity ease-in-out duration-300 opacity-0"*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            <div className="p-6 text-gray-900 dark:text-gray-100">*/}
                    {/*                You're logged in!*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )}*/}

                    {todos.length === 0 ? (
                        <div
                            className={
                                "flex flex-col mt-5 justify-center items-center"
                            }
                        >
                            <h1 className="text-3xl text-white font-bold">
                                No Todos at the moment
                            </h1>
                            <Link
                                href="/create-todo"
                                className="bg-indigo-500 text-xl text-white px-4
                                py-2 rounded-full mt-16"
                            >
                                {" "}
                                Let's create one!
                            </Link>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={`bg-white my-5 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg transition-opacity ease-in-out duration-300`}
                            >
                                <div className="flex flex-row p-6 text-gray-900 dark:text-gray-100">
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold p-3">
                                            {todo.title}
                                        </h3>
                                        <br />
                                        <h4 className="text-lg font-bold p-3">
                                            {todo.description}
                                        </h4>
                                    </div>
                                    <div className="flex flex-col ml-auto">
                                        <div className={"flex flex-row"}>
                                            <button
                                                className="bg-green-500 text-xl text-white px-7
                                        py-2 rounded-xl mt-16 mr-5"
                                                onClick={() => {
                                                    window.location.href = `/edit-todo/${todo.id}`;
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 text-xl text-white px-6
                                        py-2 rounded-xl mt-16"
                                                onClick={() => {
                                                    const response = confirm(
                                                        "Are you sure you want to delete this todo?"
                                                    );
                                                    if (response)
                                                        axios
                                                            .post(
                                                                `/delete-todo/${todo.id}`
                                                            )
                                                            .then((res) => {
                                                                if (
                                                                    res.status ===
                                                                    200
                                                                ) {
                                                                    window.location.reload();
                                                                }
                                                            })
                                                            .catch((err) => {
                                                                console.log(
                                                                    err
                                                                );
                                                            });
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
