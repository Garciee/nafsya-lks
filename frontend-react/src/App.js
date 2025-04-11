import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import AbtPage from './components/AbtPage';
import ShopPage from './components/ShopPage';
import LogPage from './components/LogPage';
import GameBar from './components/GameBar';

function App() {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/AbtPage" element={<AbtPage />} />
        <Route path='/login' element={<LogPage />} />
        <Route path='/GmeBar' element={<GameBar />} />
      </Routes>
    </Router>
  );
}

export default App;
