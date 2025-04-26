import React from "react";
import EventCard from "./EventCard";

const eventsData = [
  {
    id: 1,
    title: "Tech Innovators Conference 2025",
    date: "May 10, 2025",
    time: "10:00 AM",
    location: "Hyderabad Convention Center",
    description:
      "A full-day event featuring industry leaders in AI, IoT, and software development. Network and learn about the future of tech.",
    image: "/images/techconference.jpg",
  },
  {
    id: 2,
    title: "Eco Fest - Green Living Expo",
    date: "June 5, 2025",
    time: "11:00 AM",
    location: "Bangalore Green Plaza",
    description:
      "Celebrate sustainability with workshops, eco-product vendors, and expert talks on green living. Fun for all ages!",
    image: "/images/Ecofest.jpg",
  },
  {
    id: 3,
    title: "Music Mania 2025",
    date: "April 25, 2025",
    time: "6:00 PM",
    location: "Mumbai Open Grounds",
    description:
      "Get ready for an electrifying evening with top DJs, food stalls, and thousands of music lovers vibing under the stars.",
    image: "/images/Musicmania.jpg",
  },
];

export default function EventsGrid() {
  return (
    <div className="py-10 bg-black px-4">
      <h2 className="text-3xl font-bold text-green-400 text-center mb-8">
        🔥 Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
