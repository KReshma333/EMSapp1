import "./EventCard.css";

const EventCard = ({ event, onRegister }) => {
  const isFull = event.registeredCount >= event.capacity;

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p className="desc">{event.description}</p>

      <p>📍 {event.location}</p>
      <p>📅 {new Date(event.eventDate).toLocaleString()}</p>

      <div className="stats">
        <p>👥 {event.registeredCount} / {event.capacity}</p>
        <p className={isFull ? "full" : "upcoming"}>
          {isFull ? "FULL" : event.status}
        </p>
      </div>

      <button
        disabled={isFull}
        onClick={() => onRegister(event.id)}
      >
        {isFull ? "Event Full" : "Register"}
      </button>
    </div>
  );
};

export default EventCard;