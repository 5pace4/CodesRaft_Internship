import React from 'react';
import About from './components/About';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Pricing from './pages/Pricing';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
