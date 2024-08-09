import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteComponent from './route'; // Adjust the import as needed
import Login from './Login';
import Signup from './Signup';
import SpotRound from './spotround';
import Header from './Header';
import Footer from './Footer';
import CollPred from './collpred';
import Resources from './Resources';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<RouteComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/spotround" element={<SpotRound />} />
        <Route path="/collpred"  element={<CollPred />}/>
        <Route path="/Resources"  element={<Resources />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
