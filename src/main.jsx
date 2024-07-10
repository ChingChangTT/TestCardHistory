import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Adjust the path as necessary
import HistoryResult from './Components/History Page/HistoryResult';
const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/football-history" element={<HistoryResult/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
