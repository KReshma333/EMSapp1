import { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const userId = localStorage.getItem("userId");

  // Fetch registered events
  const fetchMyEvents = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/registrations/user/${userId}`
      );
      const data = await res.json();
      setMyEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch all events
  const fetchAllEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/events");
      const data = await res.json();
      setAllEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyEvents();
    fetchAllEvents();
  }, []);

  // Analytics values
  const totalEvents = allEvents.length;
  const registeredEvents = myEvents.length;
  const remainingEvents = totalEvents - registeredEvents;

  const progress =
    totalEvents === 0 ? 0 : (registeredEvents / totalEvents) * 100;

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        {/* 🔥 ANALYTICS SECTION */}
        <div className="analytics">
          <div className="box">
            <h3>{totalEvents}</h3>
            <p>Total Events</p>
          </div>

          <div className="box">
            <h3>{registeredEvents}</h3>
            <p>Registered</p>
          </div>

          <div className="box">
            <h3>{remainingEvents}</h3>
            <p>Remaining</p>
          </div>
        </div>

        {/* 🔥 PROGRESS BAR */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="title">My Events</h2>

        {myEvents.length === 0 ? (
          <p className="no-events">No registrations yet</p>
        ) : (
          <div className="dashboard-grid">
            {myEvents.map((reg) => (
              <div className="dashboard-card" key={reg.id}>
                
                <h3>{reg.event.title}</h3>
                <p>{reg.event.description}</p>

                <p>📍 {reg.event.location}</p>
                <p>📅 {new Date(reg.event.eventDate).toLocaleString()}</p>

                <div className="status">
                  Status:{" "}
                  <span className={reg.status === "REGISTERED" ? "green" : "red"}>
                    {reg.status}
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;