import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = [{ email: "Jane@gmail.com", password: "testpassword" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const isAuthenticated = localStorage.getItem("authenticated");
  if (isAuthenticated) {
    navigate("/dashboard");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-green-500 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
