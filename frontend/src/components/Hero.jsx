import React from 'react';

const Button = ({ children }) => (
  <button className="hero-btn">{children}</button>
);

const Hero = () => {
  return (
    <div className="hero">
      <div data-aos="fade-right" className="hero-content">
        <h1 className="hero-title">We give you peace of mind</h1>
        <p className="hero-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque
          asperiores commodi nesciunt quo maiores reprehenderit id ab provident
          quasi autem modi, dolores numquam perferendis magnam dolorum sunt
          labore optio!
        </p>
        <p className="hero-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga
          cupiditate, temporibus aut deserunt iure perspiciatis quisquam ratione
          eos delectus.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-outline-success" type="button">
            Make an Appointment
          </button>
          <button className="play-btn" type="button">
            <i className="fa-solid fa-circle-play play-icon"></i> Play Video
          </button>
        </div>
      </div>

      <div data-aos="fade-left" className="hero-image">
        <img src="../image/hero.svg" alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
