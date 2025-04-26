import React from "react";
import Navbar from "../components/Navbar";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
            Create Your Account
          </h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-green-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
