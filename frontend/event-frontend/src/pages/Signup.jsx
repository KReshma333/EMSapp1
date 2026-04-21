import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return false;
    }

    // Email format
    if (!form.email.includes("@")) {
      alert("Enter valid email");
      return false;
    }

    // Password ≥ 8 chars
    if (form.password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }

    // Phone validation (only if entered)
    if (form.phone) {
      if (form.phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
if (!res.ok) {
  const error = await res.text();
  alert(error); // THIS WILL SHOW REAL ERROR
  return;
}
      if (!res.ok) {
        const text = await res.text();
        alert(text); // email already exists case
        return;
      }

      alert("Signup successful!");
      window.location.href = "/login";

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

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

          <input
            type="text"
            name="phone"
            placeholder="Phone (10 digits)"
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => (window.location.href = "/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;