import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (key) => {
    setActive(key);
    setMenuOpen(false);
    if (key === 'blog') {
      navigate('/blog');
    } else {
      navigate('/');
      const section = document.getElementById(key);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <a className="brand" href="/" onClick={() => handleClick('home')}>
          OurBrand
        </a>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'home' ? 'active' : ''}`}
              href="/"
              onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'about' ? 'active' : ''}`}
              href="#about"
              onClick={() => handleClick('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'service' ? 'active' : ''}`}
              href="#service"
              onClick={() => handleClick('service')}
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'testimonial' ? 'active' : ''}`}
              href="#testimonial"
              onClick={() => handleClick('testimonial')}
            >
              Testimonial
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${active === 'pricing' ? 'active' : ''}`}
              href="#pricing"
              onClick={() => handleClick('pricing')}
            >
              Pricing Plan
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${active === 'contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'blog' ? 'active' : ''}`}
              href=""
              onClick={() => handleClick('blog')}
            >
              Read Our Blog
            </a>
          </li>
          <li className="nav-items mobile-buttons">
            <div className="button-group">
              <button className="btn btn-outline-success" type="button">
                SignIn
              </button>
              <button className="btn btn-outline-success" type="button">
                SignUp
              </button>
            </div>
          </li>
        </ul>

        <div className="button-group desktop-buttons">
          <button className="btn btn-outline-success" type="button">
            SignIn
          </button>
          <button className="btn btn-outline-success" type="button">
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
