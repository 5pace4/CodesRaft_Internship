const About = () => {
  return (
    <section className="about-section container" id="about">
      <div data-aos="fade-up" className="about-image">
        <video autoPlay loop muted src="../image/about.mp4"></video>
      </div>
      <div data-aos="fade-down" className="about-text">
        <div className="section-tag">About Us</div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          sequi!
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam
          reiciendis animi voluptas debitis quibusdam cum minima totam sunt
          ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus
          cum autem dolore doloremque non?
        </p>
        <ul className="insurance-list">
          <li>
            <i class="fa-solid fa-circle-check"></i> Health Insurance
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i> Education Insurance
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i> Auto Insurance
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i> Home Insurance
          </li>
        </ul>
        <div className="contact-info">
          <span className="call-icon">
            <i class="fa-solid fa-phone"></i>
          </span>{' '}
          Call Anytime: 154-050-6426
        </div>
      </div>
    </section>
  );
};

export default About;
