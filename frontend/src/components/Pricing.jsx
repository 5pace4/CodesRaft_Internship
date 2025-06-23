import React from 'react';

function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: '$29/month',
      features: [
        'Coverage up to $50,000',
        '24/7 Customer Support',
        'Basic Claims Assistance',
      ],
    },
    {
      title: 'Standard',
      price: '$59/month',
      features: [
        'Coverage up to $100,000',
        '24/7 Customer Support',
        'Advanced Claims Assistance',
        'Annual Health Check',
      ],
    },
    {
      title: 'Premium',
      price: '$99/month',
      features: [
        'Coverage up to $200,000',
        '24/7 Customer Support',
        'Premium Claims Assistance',
        'Annual Health Check',
        'Priority Service',
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span className="section-tag">Pricing Plan</span>
        <h2>Choose a plan that works best for you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          incidunt voluptatem dolor tempore ullam reprehenderit!
        </p>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div data-aos="fade-up" key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn view-more-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
