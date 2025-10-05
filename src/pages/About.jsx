import React from 'react';
import './CaseStudy.css';

const About = () => {
  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <h1>About Synthetic Aperture Radar (SAR)</h1>
        <p className="case-study-subtitle">
          Understanding the technology behind the looking glass
        </p>
      </header>

      <section className="analysis-section">
        <h2>What is SAR?</h2>
        <p>
          Synthetic Aperture Radar (SAR) is an active remote sensing technology that uses 
          microwave signals to image the Earth's surface. Unlike optical sensors, SAR can 
          see through clouds, rain, and darkness, making it ideal for all-weather, day-and-night monitoring.
        </p>

        <div className="sar-principles">
          <h3>Key SAR Principles</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>🛰️ Active Sensing</h4>
              <p>SAR transmits microwave pulses and measures the backscattered signal, unlike passive optical sensors.</p>
            </div>
            <div className="principle">
              <h4>📡 Wavelengths</h4>
              <p>Uses longer wavelengths (cm to m) that can penetrate clouds, smoke, and vegetation.</p>
            </div>
            <div className="principle">
              <h4>🔍 Polarization</h4>
              <p>Measures signal in different polarizations (VV, VH, HH, HV) to extract surface properties.</p>
            </div>
            <div className="principle">
              <h4>🕒 Time Series</h4>
              <p>Repeated observations enable change detection and measurement of ground movement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="analysis-section">
        <h2>SAR Applications</h2>
        <div className="applications-list">
          <div className="application">
            <strong>Disaster Management</strong>
            <ul>
              <li>Flood mapping and monitoring</li>
              <li>Landslide and earthquake damage assessment</li>
              <li>Oil spill detection</li>
              <li>Wildfire monitoring</li>
            </ul>
          </div>
          <div className="application">
            <strong>Environmental Monitoring</strong>
            <ul>
              <li>Deforestation and forest degradation</li>
              <li>Agricultural monitoring and crop classification</li>
              <li>Soil moisture estimation</li>
              <li>Glacier and ice sheet monitoring</li>
            </ul>
          </div>
          <div className="application">
            <strong>Infrastructure & Urban Planning</strong>
            <ul>
              <li>Subsidence and ground deformation monitoring</li>
              <li>Urban growth mapping</li>
              <li>Infrastructure stability assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="analysis-section">
        <h2>SAR Missions</h2>
        <div className="missions-table">
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Agency</th>
                <th>Launch Year</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sentinel-1</td>
                <td>ESA</td>
                <td>2014</td>
                <td>C-band, global coverage, free data</td>
              </tr>
              <tr>
                <td>NISAR</td>
                <td>NASA/ISRO</td>
                <td>2024 (planned)</td>
                <td>L & S band, 12-day repeat cycle</td>
              </tr>
              <tr>
                <td>ALOS-2</td>
                <td>JAXA</td>
                <td>2014</td>
                <td>L-band, high resolution</td>
              </tr>
              <tr>
                <td>RADARSAT-2</td>
                <td>CSA</td>
                <td>2007</td>
                <td>C-band, multiple polarizations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="analysis-section">
        <h2>Interpreting SAR Images</h2>
        <p>
          SAR images represent the intensity of the backscattered signal. Bright areas indicate 
          high backscatter (rough surfaces, urban areas), while dark areas indicate low backscatter 
          (smooth surfaces like water).
        </p>
        <div className="interpretation-guide">
          <div className="interpretation-item">
            <div className="color-swatch dark"></div>
            <div className="description">
              <strong>Water Bodies</strong> - Appear dark due to specular reflection
            </div>
          </div>
          <div className="interpretation-item">
            <div className="color-swatch bright"></div>
            <div className="description">
              <strong>Urban Areas</strong> - Appear bright due to double-bounce and corner reflections
            </div>
          </div>
          <div className="interpretation-item">
            <div className="color-swatch medium"></div>
            <div className="description">
              <strong>Vegetation</strong> - Medium backscatter due to volume scattering
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
