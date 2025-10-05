import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Through the Radar Looking Glass</h1>
        <p className="hero-subtitle">
          Revealing Earth Processes with Synthetic Aperture Radar (SAR)
        </p>
        <p className="hero-description">
          Explore how SAR technology helps us see through clouds and darkness to monitor 
          environmental changes and natural disasters.
        </p>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🌊</div>
          <h3>Chennai Floods Analysis</h3>
          <p>Monitor flood extent and water body changes using multi-temporal SAR data</p>
          <Link to="/chennai-floods" className="feature-link">
            Explore Flood Data →
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏔️</div>
          <h3>Wayanad Landslide</h3>
          <p>Detect ground movement and landslide risks with SAR interferometry</p>
          <Link to="/wayanad-landslide" className="feature-link">
            Analyze Landslide →
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>SAR Technology</h3>
          <p>Learn how Synthetic Aperture Radar works and its applications</p>
          <Link to="/about" className="feature-link">
            Learn More →
          </Link>
        </div>
      </section>

      <section className="sar-advantages">
        <h2>Why SAR?</h2>
        <div className="advantages-list">
          <div className="advantage">
            <strong>All-Weather Capability</strong>
            <p>See through clouds, rain, and smoke</p>
          </div>
          <div className="advantage">
            <strong>Day and Night Operation</strong>
            <p>Independent of sunlight conditions</p>
          </div>
          <div className="advantage">
            <strong>Surface Change Detection</strong>
            <p>Monitor millimeter-level ground movements</p>
          </div>
          <div className="advantage">
            <strong>Vegetation Penetration</strong>
            <p>See through forest canopies to ground surface</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
