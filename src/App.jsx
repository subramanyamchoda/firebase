import React from 'react';
import Register from './Register';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
