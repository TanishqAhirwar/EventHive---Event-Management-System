import React from "react";
import Navbar from "../components/Navbar";

export default function Eventform() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
            Create New Event
          </h2>

          <form className="space-y-5">
            {/* Event Title */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Event Title
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Describe the event"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="Event location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Category
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
                <option>Music</option>
                <option>Technology</option>
                <option>Art</option>
                <option>Business</option>
                <option>Food</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
