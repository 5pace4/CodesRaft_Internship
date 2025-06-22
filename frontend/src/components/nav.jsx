import React, { useState } from 'react';
function Nav() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (key) => {
    setActive(key);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="brand" href="/">
          my portfolio
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'about' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'service' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('service')}
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'testimonial' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('testimonial')}
            >
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'contact' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active === 'pricing' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('pricing')}
            >
              Pricing Plan
            </a>
          </li>
        </ul>

        <div className="d-flex">
          <button className="btn btn-outline-success" type="button">
            Get a Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
