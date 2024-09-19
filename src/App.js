// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import './Auth.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/><Route />
        <Route path="/signup" element={<Signup />} /><Route />
        <Route path="/landing" element={<LandingPage />} /><Route />
      </Routes>
    </Router>
  );
}

export default App;

