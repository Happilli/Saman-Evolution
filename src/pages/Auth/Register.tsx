import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Register: React.FC = () => {
  return (
    <Layout
      title="Register - Saman"
      description="Create an account to start using Saman."
      author="Safal Lama"
      keywords="register, Saman"
      viewport="width=device-width, initial-scale=1.0"
    >
      <main className="min-h-screen flex justify-center items-center bg-white text-black">
        <div className="p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-lg bg-white">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
            Create Your Account
          </h1>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Enter your name"
              />
            </div>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Confirm your password"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800"
                placeholder="Enter your address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-blue-500 hover:text-blue-700"
            >
              Login here
            </NavLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
