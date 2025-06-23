function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div data-aos="fade-right" className="contact-form">
          <span className="section-tag">Contact Us</span>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            quas.
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            incidunt voluptatem dolor tempore ullam reprehenderit!
          </p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" required></textarea>
            <button className="btn view-more-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div data-aos="fade-up" className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 123 Insurance Lane, City, Country
          </p>
          <p>
            <strong>Phone:</strong> 154-050-6426
          </p>
          <p>
            <strong>Email:</strong> info@insurance.com
          </p>
          <h3>Location</h3>
          <p>Find us on the map:</p>

          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1702190960555!2d91.96675517501286!3d22.46023683707983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca13cb162b%3A0x1b9e58d614013cde!2skabi%20kazi%20Nazrul%20Islam%20Hall!5e0!3m2!1sen!2sbd!4v1750631212480!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: '1rem', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
