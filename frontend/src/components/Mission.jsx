function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mission-left"
        >
          <span className="section-tag">Who We Are</span>
          <h2>
            We work with a wide range quality, reliable insurance companies.
          </h2>
          <p>
            Most of us know our driving record affects our car insurance rates.
            But, do you know that your region and even your neighborhood.
          </p>
          <ul className="mission-bullets">
            <li>Since our inception, we have worked extensively to build.</li>
            <li>Since our inception, we have worked extensively to build.</li>
          </ul>
          <button className="btn view-more-btn">Request a Quote</button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mission-right"
        >
          <img
            src="../image/hero.svg"
            alt="Mission Image"
            className="mission-image"
          />
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="mission-columns"
      >
        <div className="mission-column">
          <span className="column-number">1</span>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            est? Molestias delectus cumque a quae!
          </p>
        </div>
        <div className="mission-column">
          <span className="column-number">2</span>
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil
            ea id harum, porro nesciunt!
          </p>
        </div>
        <div className="mission-column">
          <span className="column-number">3</span>
          <h3>Our Values</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias
            est eveniet totam, quae qui?
          </p>
        </div>
        <div className="mission-column">
          <span className="column-number">4</span>
          <h3>Service Values</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            earum accusamus quis, voluptatum laboriosam at?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
