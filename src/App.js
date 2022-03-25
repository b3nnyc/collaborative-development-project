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

// App
export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<RouteLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
