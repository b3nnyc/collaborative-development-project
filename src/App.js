// Modules
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';

// Routes
import RouteLandingPage from './routes/RouteLanding/RouteLanding';
import RouteMentors from './routes/RouteMentors/RouteMentors';
import RouteKudos from './routes/RouteKudos/RouteKudos';

// App
export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<RouteLandingPage />} />
        <Route path='/mentors' element={<RouteMentors />} />
        <Route path='/mentors/kudos' element={<RouteKudos />} />
      </Routes>
    </BrowserRouter>
  );
}
