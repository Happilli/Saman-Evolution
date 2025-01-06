import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { loginUser } from "../../utils/api";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);

      if (response.data.success) {
       // sessionStorage.setItem("email", formData.email); // while registering alredy stored tho we can add it to be double sure
        navigate("/otp"); 
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Something went wrong!");
      }
    }
  };

  return (
    <Layout
      title="Login - Saman"
      description="Login to your account to start using Saman."
      author="Safal Lama"
      keywords="login, Saman"
      viewport="width=device-width, initial-scale=1.0"
    >
      <main className="min-h-screen flex justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <div className="text-center text-sm text-yellow-600 mb-6">
            <p>
              {" "}
              <NavLink to="/otp" className="text-blue-500 hover:text-blue-700">
                Verify your account
              </NavLink>
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Login
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}

          <div className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-500 hover:text-blue-700"
            >
              Register here
            </NavLink>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default Login;
