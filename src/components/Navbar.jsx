import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };


  return (
    <div className="bg-black text-white">
      <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link className="text-2xl font-bold text-green-400" to="/">
          EventHive
        </Link>

        {/* Centered Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-green-400">
              Events
            </Link>
          </li>
          <li>
            <Link to="/create-event" className="hover:text-green-400">
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/contactpage" className="hover:text-green-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="ml-auto space-x-4 hidden md:flex">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="px-4 py-1 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-green-400 text-black rounded hover:bg-white hover:text-green-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 bg-green-400 text-black rounded hover:bg-white hover:text-green-600 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
