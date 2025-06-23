import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'person1',
      position: 'CEO, Company',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QGMnZI9zpcSYvtWGuZSjSrG8HH-2K9BzpA&s',
      testimonial:
        'lorem100 dolor sit amet consectetur adipisicing elit. Quasi, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.',
    },
    {
      id: 2,
      name: 'person2',
      position: 'CTO, Tech Corp',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QGMnZI9zpcSYvtWGuZSjSrG8HH-2K9BzpA&s',
      testimonial:
        'lorem100 dolor sit amet consectetur adipisicing elit. Quasi, cumque.',
    },
    {
      id: 3,
      name: 'person3',
      position: 'Manager, Business Inc.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QGMnZI9zpcSYvtWGuZSjSrG8HH-2K9BzpA&s',
      testimonial:
        'lorem100 dolor sit amet consectetur adipisicing elit. Quasi, cumque.',
    },
  ];
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <span className="section-tag">Testimonial</span>
        <h2>What Our Clients Say</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          cumque.
        </p>
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
