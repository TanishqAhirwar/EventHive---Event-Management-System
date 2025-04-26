import React from "react";
import { Link } from "react-router-dom";


export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 max-w-sm">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-black mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-1">
          📅 {event.date} at {event.time}
        </p>
        <p className="text-sm text-gray-600 mb-3">📍 {event.location}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
        <Link
          to={`/eventdetails/${event.id}`}
          className="inline-block bg-[#00FF88] text-black font-semibold px-4 py-2 rounded hover:bg-black hover:text-[#00FF88] transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
