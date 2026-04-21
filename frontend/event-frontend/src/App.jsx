import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";

function App() {
  const userId = localStorage.getItem("userId");

  return (
    <Routes>

      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Auth pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/events"
        element={userId ? <Events /> : <Navigate to="/login" />}
      />

      <Route
        path="/dashboard"
        element={userId ? <Dashboard /> : <Navigate to="/login" />}
      />

    </Routes>
  );
}

export default App;