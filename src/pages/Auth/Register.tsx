import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { registerUser } from "../../utils/api";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
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
      const response = await registerUser(formData);
      setMessage(response.data.message);
      sessionStorage.setItem("email", formData.email);
      navigate("/otp");
    } catch (error) {
      if (
        error instanceof Error &&
        (error as { response?: { data?: { message?: string } } }).response?.data
          ?.message
      ) {
        if (
          error instanceof Error &&
          (error as { response?: { data?: { message?: string } } }).response
            ?.data?.message
        ) {
          setMessage(
            (error as unknown as { response: { data: { message: string } } })
              .response.data.message
          );
        } else {
          setMessage("Something went wrong!");
        }
      } else {
        setMessage("Something went wrong!");
      }
    }
  };

  return (
    <Layout
      title="Register - Saman"
      description="Create an account to start using Saman."
      author="Safal Lama"
      keywords="register, Saman"
      viewport="width=device-width, initial-scale=1.0"
    >
      <main className="min-h-screen flex justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
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
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Register
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
          <div className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </NavLink>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default Register;
