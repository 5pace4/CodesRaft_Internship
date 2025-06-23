import React, { useState } from 'react';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div data-aos="fade-right" className="faq-left">
          <img src="../image/faq.svg" alt="FAQ image" className="faq-image" />
        </div>
        <div className="faq-right">
          <span className="section-tag">Service Benefit</span>
          <h2>We hope you are staying safe and well during this Any time</h2>
          <p>
            We hope you are staying safe and well during this for a ready ensure
            unprecedented time. At this time, online auto.
          </p>
          <div data-aos="fade-left" className="faq-questions">
            <div data-aos="fade-left" className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(1)}>
                We have dedicated, knowledgeable insurance advisors?
                <span>{openFAQ === 1 ? '▲' : '▼'}</span>
              </button>
              {openFAQ === 1 && (
                <div className="faq-answer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dolorum quibusdam aspernatur inventore incidunt earum!
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(2)}>
                We have dedicated, knowledgeable insurance advisors?
                <span>{openFAQ === 2 ? '▲' : '▼'}</span>
              </button>
              {openFAQ === 2 && (
                <div className="faq-answer">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, accusantium. Aliquid, minima accusantium! Nostrum,
                  provident!
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(3)}>
                We have dedicated, knowledgeable insurance advisors?
                <span>{openFAQ === 3 ? '▲' : '▼'}</span>
              </button>
              {openFAQ === 3 && (
                <div className="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum quibusdam ea aliquid ut nostrum minus?
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
