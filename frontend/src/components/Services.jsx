import React from 'react';

function Services() {
  return (
    <section className="services mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <span className="section-tag">Who We Are</span>
          <h2>
            We work with a wide range quality, reliable insurance companies.
          </h2>
        </div>
        <div className="mission-right">
          <button className="btn view-more-btn">View More Services</button>
        </div>
      </div>
      <div className="mission-columns services-cards">
        <div data-aos="fade-left" className="service-card">
          <img
            src="https://via.placeholder.com/100x100?text=Home+Insurance"
            alt="Home Insurance"
          />
          <h3>Home Insurance</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum enim
            reprehenderit reiciendis, pariatur cum explicabo.
          </p>
          <a href="#" className="read-more">
            Read More +
          </a>
        </div>
        <div data-aos="zoom-in" className="service-card">
          <img
            src="https://via.placeholder.com/100x100?text=Auto+Insurance"
            alt="Auto Insurance"
          />
          <h3>Auto Insurance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            animi mollitia harum, distinctio aliquam voluptatem!
          </p>
          <a href="#" className="read-more">
            Read More +
          </a>
        </div>
        <div data-aos="zoom-in" className="service-card">
          <img
            src="https://via.placeholder.com/100x100?text=Health+Insurance"
            alt="Health Insurance"
          />
          <h3>Health Insurance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium quas sapiente quam quae, deserunt similique?
          </p>
          <a href="#" className="read-more">
            Read More +
          </a>
        </div>
        <div data-aos="fade-right" className="service-card">
          <img
            src="https://via.placeholder.com/100x100?text=Business+Insurance"
            alt="Business Insurance"
          />
          <h3>Business Insurance</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ratione odit laborum, quos facilis neque.
          </p>
          <a href="#" className="read-more">
            Read More +
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
