import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaLock, FaSignInAlt } from "react-icons/fa"; // Importing React Icons
import Layout from "../../components/Layout/Layout";

const Login: React.FC = () => {
  return (
    <Layout
      title="Login - Saman"
      description="Log in to access your account on Saman."
      author="Safal Lama"
      keywords="login, Saman"
      viewport="width=device-width, initial-scale=1.0"
    >
      <main className="min-h-screen flex bg-white text-black">
        {/* Left Side Section (Form) */}
        <div className="w-full sm:w-1/2 p-10 sm:p-14 flex flex-col justify-center items-center">
          <form className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:shadow-2xl hover:border-gray-400">
            {/* Email Field with Icon as Placeholder */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-2xl text-gray-800 mb-4 text-left font-semibold"
              >
                Email
              </label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-200 ease-in-out">
                {/* Icon as Placeholder */}
                <FaUserAlt className="absolute left-4 text-gray-400 text-2xl" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 pl-14 text-xl text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field with Icon as Placeholder */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-2xl text-gray-800 mb-4 text-left font-semibold"
              >
                Password
              </label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-200 ease-in-out">
                {/* Icon as Placeholder */}
                <FaLock className="absolute left-4 text-gray-400 text-2xl" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-4 pl-14 text-xl text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 rounded-full text-2xl font-semibold flex items-center justify-center hover:bg-gray-800 transition duration-200 ease-in-out"
            >
              <FaSignInAlt className="inline mr-3 text-2xl" /> Login
            </button>
          </form>

          <div className="mt-6 text-xl text-gray-600 text-center">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-500 hover:text-blue-700 text-xl"
            >
              Register here
            </NavLink>
          </div>
        </div>

        {/* Right Side Section (Greeting with Black Background and Centered Text) */}
        <div className="w-1/2 p-14 flex flex-col justify-center items-center bg-black text-white">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-white">
            Login Portal
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
