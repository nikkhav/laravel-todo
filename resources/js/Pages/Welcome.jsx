import { Link, Head } from "@inertiajs/react";
import hero from "../assets/hero.png";

export default function Welcome({ auth }) {
    return (
        <div className={"dark:bg-[#111827]"}>
            <Head>
                <title>Welcome</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&family=Roboto:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <div className={"flex flex-col pt-32"}>
                <h1 className="text-5xl dark:text-white font-raleway mt-5 text-center">
                    Organize your life and work with Todoist
                </h1>
                <p className="text-2xl dark:text-white font-raleway mt-5 text-center">
                    Todoist is a task management tool that helps you stay
                    organized and manage your day-to-day.
                </p>

                <div className="flex flex-row justify-center mt-20">
                    <Link
                        href={route("register")}
                        className="bg-orange-500 hover:bg-orange-700 text-white text-xl font-bold py-3 px-8 rounded-full"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="flex flex-row justify-center mt-10 pb-32">
                    <img className={"rounded"} src={hero} alt={"Hero"} />
                </div>
            </div>
        </div>
    );
}
