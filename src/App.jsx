import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home';
import About from '/src/pages/About';
import Github from '/src/pages/Github';
import Contact from '/src/pages/Contact';
import Navbar from '/src/components/NavBar';

function App() {
    return (
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
export default App
