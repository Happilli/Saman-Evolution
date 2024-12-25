import React from "react";
import { NavLink } from "react-router-dom";
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
      <main className="min-h-screen flex justify-center items-center bg-white text-black">
        <div className="p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-lg bg-white">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
            Login to Your Account
          </h1>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-500 hover:text-blue-700"
            >
              Register here
            </NavLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
