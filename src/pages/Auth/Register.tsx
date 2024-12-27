import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
      <main className="min-h-screen flex bg-white text-black">
        {/* Left Side Section (Greeting) */}
        <div className="w-1/2 p-12 flex flex-col justify-center bg-black text-white text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Saman</h1>
          <p className="text-xl sm:text-2xl">
            Join us and experience amazing features right at your fingertips!
          </p>
        </div>

        {/* Right Side Section (Form) */}
        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center bg-white">
          <form className="w-full max-w-lg space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:shadow-2xl hover:border-gray-400">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your name"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your email"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your password"
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Confirm your password"
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Phone
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your phone number"
                />
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-lg text-gray-800 mb-2 text-left"
              >
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your address"
                />
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <button
              type="submit"
              className="w-1/3 mx-auto bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 focus:ring-4 focus:ring-blue-500 transition-all duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </NavLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
