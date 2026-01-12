import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg relative">
          <div className="sticky top-0 bg-white z-10 p-4 border-b">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">TrustWallet</h1>
              
            </div>
          </div>
          
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;