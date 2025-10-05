import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CaseStudy.css';

const WayanadLandslide = () => {
  // Mock data for landslide analysis
  const deformationData = [
    { month: 'Jan', deformation: 2.1, rainfall: 45, risk: 'Low' },
    { month: 'Feb', deformation: 1.8, rainfall: 38, risk: 'Low' },
    { month: 'Mar', deformation: 3.2, rainfall: 65, risk: 'Medium' },
    { month: 'Apr', deformation: 5.8, rainfall: 120, risk: 'High' },
    { month: 'May', deformation: 12.5, rainfall: 280, risk: 'Very High' },
    { month: 'Jun', deformation: 18.2, rainfall: 350, risk: 'Extreme' },
  ];

  const slopeStabilityData = [
    { area: 'North Slope', stability: 85, movement: 2.1 },
    { area: 'South Slope', stability: 45, movement: 12.8 },
    { area: 'East Slope', stability: 72, movement: 5.2 },
    { area: 'West Slope', stability: 38, movement: 15.4 },
  ];

  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <h1>Wayanad Landslide Risk Assessment</h1>
        <p className="case-study-subtitle">
          Ground deformation monitoring using SAR interferometry (InSAR)
        </p>
      </header>

      <section className="analysis-section">
        <h2>Surface Deformation Timeline</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deformationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" label={{ value: 'Deformation (mm)', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="deformation" fill="#ff7300" name="Surface Deformation" />
              <Bar yAxisId="right" dataKey="rainfall" fill="#0088fe" name="Monthly Rainfall" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="risk-assessment">
        <h2>Landslide Risk Assessment</h2>
        <div className="risk-grid">
          {slopeStabilityData.map((area, index) => (
            <div key={index} className="risk-card">
              <h4>{area.area}</h4>
              <div className={`stability-indicator ${area.stability > 70 ? 'stable' : area.stability > 50 ? 'moderate' : 'critical'}`}>
                Stability: {area.stability}%
              </div>
              <div className="movement-data">
                Movement: {area.movement} mm/month
              </div>
              <div className="risk-level">
                Risk: {area.stability > 70 ? 'Low' : area.stability > 50 ? 'Medium' : 'High'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="insar-explanation">
        <h2>InSAR Technology for Landslide Monitoring</h2>
        <div className="tech-explanation">
          <div className="tech-point">
            <h4>🔍 Differential Interferometry</h4>
            <p>Measures phase differences between SAR acquisitions to detect millimeter-scale ground movements</p>
          </div>
          <div className="tech-point">
            <h4>📡 Persistent Scatterers</h4>
            <p>Uses stable reflectors (buildings, rocks) to track precise deformation over time</p>
          </div>
          <div className="tech-point">
            <h4>⚠️ Early Warning</h4>
            <p>Detects precursory movements before catastrophic failure occurs</p>
          </div>
        </div>
      </section>

      <section className="preventive-measures">
        <h2>Recommended Actions</h2>
        <div className="measures-list">
          <div className="measure urgent">
            <strong>Immediate Evacuation</strong>
            <p>Areas with deformation &gt; 10mm/month</p>
          </div>
          <div className="measure high">
            <strong>Continuous Monitoring</strong>
            <p>Weekly SAR acquisitions for high-risk zones</p>
          </div>
          <div className="measure medium">
            <strong>Drainage Improvement</strong>
            <p>Reduce water infiltration in slope areas</p>
          </div>
          <div className="measure low">
            <strong>Vegetation Management</strong>
            <p>Maintain ground cover to stabilize soil</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WayanadLandslide;
