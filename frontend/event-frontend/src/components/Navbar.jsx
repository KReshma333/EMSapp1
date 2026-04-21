import "./Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <h2>EventHub</h2>

      <div className="nav-links">
        <span onClick={() => (window.location.href = "/events")}>
          Events
        </span>

        <span onClick={() => (window.location.href = "/dashboard")}>
          Dashboard
        </span>

        <span onClick={handleLogout}>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;