import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './about.scss';

const AboutPage = () => {
  const headerRef = useRef(null);
  const textRefs = useRef([]);
  const statRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      textRefs.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      statRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="solar-about-page">
      <header ref={headerRef} className="hero-section">
        <h1>
          Passionate <span>and sustainable</span>
        </h1>
      </header>

      <section className="about-text">
        <p ref={(el) => (textRefs.current[0] = el)}>
          We are proud to offer a wide range of solar energy services, including
          solar panel installation, maintenance, and repair.
        </p>
        <p ref={(el) => (textRefs.current[1] = el)}>
          Our commitment to sustainability is at the heart of everything we do.
          We believe solar energy is the key to a more sustainable future.
        </p>
      </section>

      <section className="stats">
        <div ref={(el) => (statRefs.current[0] = el)} className="stat-box">
          <h2>210+</h2>
          <p>Commercial Installations</p>
        </div>
        <div ref={(el) => (statRefs.current[1] = el)} className="stat-box">
          <h2>510+</h2>
          <p>Residentials</p>
        </div>
        <div ref={(el) => (statRefs.current[2] = el)} className="stat-box">
          <h2>18GW</h2>
          <p>Power Producer</p>
        </div>
        <div ref={(el) => (statRefs.current[3] = el)} className="stat-box">
          <h2>15%</h2>
          <p>City’s Electricity Supply</p>
        </div>
      </section>

      <section className="solutions">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="solution-card"
        >
          <h3>Residentials</h3>
          <p>Our solutions for homes to harness solar energy.</p>
        </div>
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="solution-card"
        >
          <h3>Commercials</h3>
          <p>Commercial solar solutions for businesses and industries.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
