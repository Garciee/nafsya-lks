import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GamePage from './components/GamePage';
import Checkout from './components/Checkout';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';

function App() {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/game" /> : <LoginForm />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
