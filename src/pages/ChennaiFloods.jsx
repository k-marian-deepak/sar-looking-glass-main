import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CaseStudy.css';

const ChennaiFloods = () => {
  const [selectedPolarization, setSelectedPolarization] = useState('VV');

  // Mock SAR data for Chennai floods
  const sarData = [
    { date: '2023-11-01', VV: -12.5, VH: -18.2, floodArea: 5 },
    { date: '2023-11-02', VV: -11.8, VH: -17.5, floodArea: 8 },
    { date: '2023-11-03', VV: -15.2, VH: -21.8, floodArea: 45 },
    { date: '2023-11-04', VV: -16.8, VH: -23.4, floodArea: 78 },
    { date: '2023-11-05', VV: -18.3, VH: -25.1, floodArea: 95 },
    { date: '2023-11-06', VV: -17.2, VH: -23.9, floodArea: 82 },
    { date: '2023-11-07', VV: -15.8, VH: -22.1, floodArea: 65 },
    { date: '2023-11-08', VV: -14.2, VH: -20.3, floodArea: 42 },
    { date: '2023-11-09', VV: -13.1, VH: -19.0, floodArea: 25 },
    { date: '2023-11-10', VV: -12.7, VH: -18.5, floodArea: 12 },
  ];

  const polarizationData = [
    { name: 'VV', value: -15.2, description: 'Vertical transmit, Vertical receive - Sensitive to surface water' },
    { name: 'VH', value: -21.8, description: 'Vertical transmit, Horizontal receive - Good for vegetation and rough surfaces' },
  ];

  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <h1>Chennai Floods 2023 - SAR Analysis</h1>
        <p className="case-study-subtitle">
          Monitoring flood extent and water body changes using Sentinel-1 SAR data
        </p>
      </header>

      <section className="analysis-section">
        <h2>SAR Backscatter Analysis</h2>
        
        <div className="polarization-selector">
          <button 
            className={selectedPolarization === 'VV' ? 'polar-btn active' : 'polar-btn'}
            onClick={() => setSelectedPolarization('VV')}
          >
            VV Polarization
          </button>
          <button 
            className={selectedPolarization === 'VH' ? 'polar-btn active' : 'polar-btn'}
            onClick={() => setSelectedPolarization('VH')}
          >
            VH Polarization
          </button>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis label={{ value: 'Backscatter (dB)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={selectedPolarization} 
                stroke="#8884d8" 
                strokeWidth={2}
                name={`${selectedPolarization} Backscatter`}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="interpretation">
          <h3>Interpretation</h3>
          <p>
            The sharp decrease in SAR backscatter around November 3-7 indicates extensive flooding. 
            Smooth water surfaces act as specular reflectors, causing low backscatter values. 
            The VV polarization is particularly sensitive to surface water detection.
          </p>
        </div>
      </section>

      <section className="flood-metrics">
        <h2>Flood Impact Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">95 km²</div>
            <div className="metric-label">Peak Flood Area</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">5 days</div>
            <div className="metric-label">Flood Duration</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">-25.1 dB</div>
            <div className="metric-label">Lowest Backscatter</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">Urban Areas</div>
            <div className="metric-label">Most Affected</div>
          </div>
        </div>
      </section>

      <section className="sar-principles">
        <h2>SAR Flood Detection Principles</h2>
        <div className="principles-grid">
          <div className="principle">
            <h4>Water Surface Smoothness</h4>
            <p>Calm water appears dark in SAR images due to specular reflection away from the sensor</p>
          </div>
          <div className="principle">
            <h4>Double Bounce Effect</h4>
            <p>Flooded vegetation shows bright returns due to double-bounce between water surface and tree trunks</p>
          </div>
          <div className="principle">
            <h4>Multi-temporal Analysis</h4>
            <p>Comparing pre-flood and post-flood images reveals changed areas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChennaiFloods;
