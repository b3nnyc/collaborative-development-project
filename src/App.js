// Modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import RouteLandingPage from './routes/RouteLanding';

// App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RouteLandingPage />} />
      </Routes>
    </Router>
  );
}
