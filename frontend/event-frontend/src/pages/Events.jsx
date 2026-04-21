import { useEffect, useState } from "react";
import "./Events.css";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const BASE_URL = "https://emsapp1-production.up.railway.app/api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("userId");

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${BASE_URL}/events`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Register
  const handleRegister = async (eventId) => {
    try {
      const res = await fetch(
        `${BASE_URL}/registrations/register?userId=${userId}&eventId=${eventId}`,
        { method: "POST" }
      );

      if (!res.ok) {
        const error = await res.text();
        alert(error);
        return;
      }

      alert("Successfully registered for event!");
      fetchEvents();

    } catch (err) {
      console.error(err);
      alert("Error registering");
    }
  };

  return (
    <>
      <Navbar />

      <div className="events-container">
        <h2 className="title">Available Events</h2>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegister}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;