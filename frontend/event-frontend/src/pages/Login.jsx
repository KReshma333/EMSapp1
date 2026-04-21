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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch(
        `http://localhost:8080/api/auth/login?email=${form.email}&password=${form.password}`,
        {
          method: "POST"
        }
      );

    if (!res.ok) {
  const msg = await res.text();

  if (msg.includes("not registered")) {
    alert("User not found. Please register.");
  } else {
    alert("Incorrect password");
  }

  return;
}

      const data = await res.json();

      // 🔥 Store userId for future use
      localStorage.setItem("userId", data.id);

      alert("Login successful!");

      // Redirect to events page
      window.location.href = "/events";

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
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