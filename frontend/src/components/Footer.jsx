import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <h2>Ready to go Insurance Health!</h2>
        <p>
          Most of us know our driving record affects our car insurance rates.
        </p>
        <div className="footer-buttons">
          <button className="btn view-more-btn">Let's Talk</button>
          <button className="btn">Request Free Trial</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src="" alt="Insura Logo" className="footer-logo" />
          <p>
            Working with a life coach is like ensure hanging out with a really
            honest friend who believes in your dreams always.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <FaXTwitter />
            </a>
            <a href="mailto:youremail@example.com" aria-label="Email">
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>Home Insurance</li>
            <li>Auto Insurance</li>
            <li>Business Insurance</li>
            <li>Health Insurance</li>
            <li>24/7 Customer Helper</li>
            <li>Super Medical Care</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Chittagong, Bangladesh</p>
          <p>Chittagong-4349, Chittagong</p>
          <p>154-050-6426</p>
          <p>info@insurance.com</p>
        </div>
        <div className="footer-column">
          <h3>Schedule Hours</h3>
          <p>Sunday, Monday: 09:00 am - 11:00 pm</p>
          <p>Tuesday: 09:00 am - 10:00 pm</p>
          <p>Wednesday: 09:00 am - 08:00 pm</p>
          <p>Thursday: 09:00 am - 09:00 pm</p>
          <p>Saturday, Friday: Closed</p>
        </div>
        <div className="copyright">
          all rights reserved &copy; 2025 tofayelahmmedbabu
        </div>
      </div>
    </footer>
  );
}

export default Footer;
