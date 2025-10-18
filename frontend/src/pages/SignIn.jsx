import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Auth.css";
import api, { setAuthToken } from "../api";

const SignIn = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("admin");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log("Selected Role:", selectedRole);

    if (userId.trim() === "" || password.trim() === "") {
      alert("Please enter all fields.");
      return;
    }

    if (!/^[0-9]+$/.test(userId)) {
      alert("Only numbers are allowed in Admin ID / Student ID.");
      return;
    }

    if (userId.length !== 6) {
      alert("Admin ID / Student ID must be exactly 6 digits long.");
      return;
    }

    if (password.length > 12) {
      alert("Password must not exceed 12 characters.");
      return;
    }

    localStorage.setItem("token", "demo-token");
    localStorage.setItem("role", selectedRole);
    setUserId("");
    setPassword("");

    if (selectedRole === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/student/dashboard");
    }
=======
    setError("");
    try {
      setLoading(true);
      const { data } = await api.post('/auth/login', { email, password });
      if (data?.token) setAuthToken(data.token);
      try { localStorage.setItem('lr_user', JSON.stringify(data.user || {})); } catch {}
      navigate("/dashboard");
    } catch (err) {
      setError(err?.response?.data?.error || 'Login failed');
    } finally { setLoading(false); }
>>>>>>> f2c7f47e09fc9d30e5a29568bb53d7aa59876c04
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={logo} alt="University Logo" className="logo" />
        <h1 className="app-name">LibReport</h1>
      </div>
      <div className="auth-right">
        <h2>Sign in to LibReport</h2>
        <div className="role-selection">
          <p>Sign In as</p>
          <div className="role-buttons">
            <button
              type="button"
              className={`role-btn ${selectedRole === "admin" ? "active" : ""}`}
              onClick={() => setSelectedRole("admin")}
            >
              Admin
            </button>
            <button
              type="button"
              className={`role-btn ${selectedRole === "student" ? "active" : ""}`}
              onClick={() => setSelectedRole("student")}
            >
              Student
            </button>
          </div>
        </div>
        <h3>Log in to your account</h3>
<<<<<<< HEAD
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>{selectedRole === "admin" ? "Admin ID" : "Student ID"}</label>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder={
                  selectedRole === "admin"
                    ? "Enter your Admin ID"
                    : "Enter your Student ID"
                }
                value={userId}
                maxLength="6"
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                maxLength="12"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
=======

        {error && <div className="error" style={{color:'#b00020', marginBottom: '8px'}}>{error}</div>}
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <i className="fa fa-user"></i>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
>>>>>>> f2c7f47e09fc9d30e5a29568bb53d7aa59876c04
          </div>
          <div className="forgot-password">
            <Link to="/forgot">Forgot Password?</Link>
          </div>
<<<<<<< HEAD
          <button type="submit" className="btn">Log in</button>
=======

          <button type="submit" className="btn" disabled={loading}>{loading ? 'Signing in…' : 'Log in'}</button>

>>>>>>> f2c7f47e09fc9d30e5a29568bb53d7aa59876c04
          <div className="extra-links">
            <p>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;