import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { verifyOtp } from "../../utils/api";

const Otp: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = sessionStorage.getItem("email");
    if (!email) {
      setMessage("No email found. Please register again.");
      return;
    }

    try {
      const response = await verifyOtp({ otp, email });
      setMessage(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      if (
        error instanceof Error &&
        "response" in error &&
        (error.response as { data?: { message?: string } })?.data?.message
      ) {
        setMessage(
          (error.response as { data: { message: string } }).data.message
        );
      } else {
        setMessage("Something went wrong!");
      }
    }
  };

  return (
    <Layout
      title="Verify OTP - Saman"
      description="Enter OTP to verify your account."
      author="Safal Lama"
      keywords="otp, verify"
      viewport="width=device-width, initial-scale=1.0"
    >
      <main className="min-h-screen flex justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Enter OTP
          </h2>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              OTP
            </label>
            <div className="relative">
              <input
                type="text"
                id="otp"
                name="otp"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleChange}
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Verify OTP
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </form>
      </main>
    </Layout>
  );
};

export default Otp;
