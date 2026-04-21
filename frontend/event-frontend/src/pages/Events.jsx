import { useEffect, useState } from "react";
import "./Events.css";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("userId");

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Register for event
  const handleRegister = async (eventId) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/registrations/register?userId=${userId}&eventId=${eventId}`,
        { method: "POST" }
      );

      
      if (!res.ok) {
  const error = await res.text();
  alert(error);
  return;
}

alert("Successfully registered for event!");

      // Refresh after registration
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