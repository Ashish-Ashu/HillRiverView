import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Booking from './components/Booking';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
