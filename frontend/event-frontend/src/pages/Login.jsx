import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.email || !form.password) {
      alert("All fields are required");
      return false;
    }
    return true;
  };

const BASE_URL = "https://emsapp1-production.up.railway.app/api";

const handleLogin = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const res = await fetch(
      `${BASE_URL}/auth/login?email=${form.email}&password=${form.password}`,
      {
        method: "POST"
      }
    );

    const text = await res.text();

    if (!res.ok) {
      if (text.includes("not found") || text.includes("User not found")) {
        alert("User not found. Please register.");
      } else if (text.includes("Invalid") || text.includes("password")) {
        alert("Incorrect password");
      } else {
        alert(text);
      }
      return;
    }

    const data = JSON.parse(text);

    // store userId
    localStorage.setItem("userId", data.id);

    alert("Login successful!");
    window.location.href = "/events";

  } catch (err) {
    console.error(err);
    alert("Server not reachable");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          New user?{" "}
          <span onClick={() => (window.location.href = "/signup")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;