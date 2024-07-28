import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import Notifications from './components/Notifications.jsx';

function App() {



  return (
    <Router>
      <div className="App">
      <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<FeedbackForm  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications  />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



