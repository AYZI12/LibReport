import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import StudentDashboard from "./pages/student/StudentDashboard";
import BooksBorrowed from "./pages/student/BooksBorrowed";
import BrowseLibrary from "./pages/student/BrowseLibrary";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;