import React from 'react';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
