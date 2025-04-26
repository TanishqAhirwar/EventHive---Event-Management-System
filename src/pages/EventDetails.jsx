import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { eventData } from "../utils/eventsdata";

export default function EventDetails() {
  const { id } = useParams();
  const event = eventData.find((e) => e.id === parseInt(id));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full max-h-[650px] object-cover rounded-xl shadow"
          />
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-4">
              {event.title}
            </h1>
            <p className="text-gray-300 mb-2">
              📅 {event.date} at {event.time}
            </p>
            <p className="text-gray-300 mb-2">📍 {event.location}</p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {event.description}
            </p>

            <div className="bg-white text-black p-4 rounded-lg shadow mb-4">
              <p className="font-semibold">Total Seats: {event.totalSeats}</p>
              <p>Booked Seats: {event.attendees}</p>
              <p>Available: {event.totalSeats - event.attendees}</p>
            </div>

            {/* <div className="mb-4">
              <h3 className="text-green-400 font-semibold text-lg mb-1">Speakers</h3>
              <ul className="list-disc list-inside text-gray-300">
                {event.speakers.map((speaker, index) => (
                  <li key={index}>{speaker}</li>
                ))}
              </ul>
            </div> */}

            {/* <div className="mb-4">
              <h3 className="text-green-400 font-semibold text-lg mb-1">Sponsors</h3>
              <p className="text-gray-300">{event.sponsors.join(", ")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-green-400 font-semibold text-lg mb-1">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-500 text-black text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div> */}

            <Link
              to={`/ticketbooking/${event.id}`}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition font-semibold"
            >
              Book Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
