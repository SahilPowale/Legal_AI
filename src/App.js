import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FindLawyerPage from './pages/FindLawyerPage';
import LawyerProfilePage from './pages/LawyerProfilePage';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/find-lawyer" element={<FindLawyerPage />} />
      <Route path="/lawyers/:id" element={<LawyerProfilePage />} />
      <Route path="/book/:id" element={<BookingPage />} />
    </Routes>
  );
}
