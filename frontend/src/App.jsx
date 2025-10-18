import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles/Auth.css";
import Dashboard from "./pages/Dashboard";
import UsageHeatmaps from "./pages/UsageHeatmaps";
import Tracker from "./pages/Tracker";
import Reports from "./pages/Reports";
import UserManagement from "./pages/UserManagement";
import MaterialManagement from "./pages/MaterialManagement";
import BooksManagement from "./pages/BooksManagement";
<<<<<<< HEAD
import StudentDashboard from "./pages/student/StudentDashboard";
import BooksBorrowed from "./pages/student/BooksBorrowed";
import BrowseLibrary from "./pages/student/BrowseLibrary";
=======
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function RequireAuth({ children }) {
  try {
    const t = localStorage.getItem('lr_token');
    if (!t) return <Navigate to="/signin" replace />;
  } catch {}
  return children;
}

function RequireAdmin({ children }) {
  try {
    const raw = localStorage.getItem('lr_user');
    const u = raw ? JSON.parse(raw) : null;
    if (!u || u.role !== 'admin') return <Navigate to="/dashboard" replace />;
  } catch {}
  return children;
}
>>>>>>> f2c7f47e09fc9d30e5a29568bb53d7aa59876c04

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usage-heatmaps" element={<UsageHeatmaps />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/materialmanagement" element={<MaterialManagement />} />
          <Route path="/booksmanagement" element={<BooksManagement />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/books-borrowed" element={<BooksBorrowed />} />
          <Route path="/student/browse-library" element={<BrowseLibrary />} />
          
=======
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/usage-heatmaps" element={<RequireAuth><UsageHeatmaps /></RequireAuth>} />
          <Route path="/tracker" element={<RequireAuth><Tracker /></RequireAuth>} />
          <Route path="/reports" element={<RequireAuth><Reports /></RequireAuth>} />
          <Route path="/usermanagement" element={<RequireAuth><RequireAdmin><UserManagement /></RequireAdmin></RequireAuth>} />
          <Route path="/materialmanagement" element={<RequireAuth><RequireAdmin><MaterialManagement /></RequireAdmin></RequireAuth>} />
          <Route path="/booksmanagement" element={<RequireAuth><RequireAdmin><BooksManagement /></RequireAdmin></RequireAuth>} />
>>>>>>> f2c7f47e09fc9d30e5a29568bb53d7aa59876c04
        </Routes>
      </div>
    </Router>
  );
}

export default App;