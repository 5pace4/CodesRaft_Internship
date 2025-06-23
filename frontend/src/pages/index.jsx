import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Mission from '../components/Mission';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';

function Index() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Services />
      </section>
      <section>
        <Mission />
      </section>
      <section>
        <FAQ />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Index;
