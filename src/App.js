// Modules
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

// Routes
import RouteLandingPage from "./routes/RouteLanding";
import Profile from "./pages/Profile/Profile";
import Mentors from "./pages/Mentors/Mentors";
import Kudos from "./pages/Kudos/Kudos";

// App
export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<RouteLandingPage />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentors/hernando" element={<Profile />} />
        <Route path="/mentors/hernando/kudos" element={<Kudos />} />
      </Routes>
    </BrowserRouter>
  );
}
