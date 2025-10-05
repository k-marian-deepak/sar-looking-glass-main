#  Through the Radar Looking Glass: Revealing Earth Processes with SAR

A React.js web application that demonstrates Synthetic Aperture Radar (SAR) data analysis for monitoring natural disasters and environmental changes, featuring case studies of Chennai floods and Wayanad landslides.

![SAR Technology](https://img.shields.io/badge/SAR-Remote%20Sensing-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![NASA Space Apps](https://img.shields.io/badge/NASA-Space%20Apps%20Challenge-0b3d91)

##  Overview

This project was developed for the NASA Space Apps Challenge 2023, addressing the problem statement **"Through the Radar Looking Glass: Revealing Earth Processes with SAR"**. The application showcases how Synthetic Aperture Radar technology can be used to monitor environmental changes and natural disasters through interactive data visualization and educational content.

### Key Features

- ** Chennai Floods Analysis** - Monitor flood extent using multi-temporal SAR data
- ** Wayanad Landslide Assessment** - Ground deformation monitoring with SAR interferometry
- ** Interactive Visualizations** - Real-time charts and risk assessment tools
- ** Educational Content** - Learn about SAR technology and its applications
- ** Responsive Design** - Works seamlessly across all devices
- **  No API Keys Required** - Uses realistic mock data for demonstration

##  Live Demo

[Add your live demo link here]

##  Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **React Router DOM** | Client-side routing |
| **Recharts** | Data visualization |
| **CSS3** | Styling and responsive design |
| **Vite** | Build tool and development server |



### Project Structure :
```
sar-looking-glass/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── ChennaiFloods.jsx
│   │   ├── WayanadLandslide.jsx
│   │   ├── About.jsx
│   │   └── CaseStudy.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

### File Descriptions

#### Core Application Files
- **`App.jsx`** - Main application component with routing configuration
- **`App.css`** - Global styles and common component styles
- **`main.jsx`** - Application entry point

#### Components
- **`components/Navbar.jsx`** - Navigation header with active route highlighting
- **`components/Navbar.css`** - Navigation bar styles

#### Pages
- **`pages/Home.jsx`** - Landing page with feature overview and SAR advantages
- **`pages/Home.css`** - Home page specific styles
- **`pages/ChennaiFloods.jsx`** - Flood monitoring case study with interactive charts
- **`pages/WayanadLandslide.jsx`** - Landslide risk assessment with deformation data
- **`pages/About.jsx`** - Educational content about SAR technology
- **`pages/CaseStudy.css`** - Shared styles for case study pages

#### Configuration
- **`package.json`** - Project dependencies and scripts
- **`vite.config.js`** - Vite build tool configuration


### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation & Running the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/GlitchX999/sar-looking-glass.git
   cd sar-looking-glass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required dependencies including:
   - React & React DOM
   - React Router DOM
   - Recharts for data visualization
   - Vite for build tooling
   - All other dependencies listed in `package.json`

3. **Start the development server**
   ```bash
   npm start
   ```
   Or alternatively:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder. To preview the production build locally:

```bash
npm run preview
```

### Troubleshooting

**Issue**: "react-scripts is not recognized" error  
**Solution**: This project uses Vite, not Create React App. Make sure you run `npm install` first.

**Issue**: "Cannot find module" errors  
**Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again.

**Issue**: Port 3000 is already in use  
**Solution**: Either stop the other process using port 3000, or modify the port in `vite.config.js`.

## Mock Data Structure

The application uses realistic mock data simulating actual SAR measurements:

### Chennai Floods Data
```javascript
{
  date: '2023-11-03',
  VV: -15.2,      // Vertical-Vertical polarization (dB)
  VH: -21.8,      // Vertical-Horizontal polarization (dB)
  floodArea: 45   // Flooded area in km²
}
```

### Wayanad Landslide Data
```javascript
{
  month: 'May',
  deformation: 12.5,  // Surface movement in mm
  rainfall: 280,      // Monthly rainfall in mm
  risk: 'Very High'   // Risk assessment level
}
```

##  Key SAR Concepts Demonstrated

### 1. **Polarization Analysis**
- **VV Polarization**: Sensitive to surface water and smooth surfaces
- **VH Polarization**: Better for vegetation and rough terrain analysis

### 2. **Backscatter Interpretation**
- Low values (-20 to -30 dB): Smooth surfaces (water, ice)
- Medium values (-10 to -20 dB): Vegetation, agricultural areas
- High values (above -10 dB): Urban areas, rough terrain

### 3. **Change Detection**
- Multi-temporal analysis comparing before/after events
- Flood extent mapping through backscatter changes
- Ground deformation monitoring using interferometry

##  Use Cases

### Disaster Monitoring
- **Flood Mapping**: Real-time water extent monitoring
- **Landslide Detection**: Early warning through ground movement
- **Damage Assessment**: Post-disaster impact analysis

### Environmental Monitoring
- **Deforestation**: Forest cover change detection
- **Agricultural Monitoring**: Crop health and soil moisture
- **Urban Development**: Land use change tracking

##  Educational Value

This application serves as an educational tool for:

- **Students** learning about remote sensing and SAR technology
- **Researchers** exploring SAR data applications
- **Emergency Responders** understanding satellite-based disaster monitoring
- **General Public** appreciating the value of Earth observation

##  Future Enhancements

- [ ] Real SAR data integration from Sentinel-1
- [ ] Interactive map visualization with Leaflet
- [ ] Time-series animation of SAR data
- [ ] Machine learning for automatic feature detection
- [ ] Additional case studies (earthquakes, oil spills, etc.)
- [ ] User authentication for saving analyses
- [ ] Mobile app version

## Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks conventions
- Use meaningful component and variable names
- Ensure responsive design for all screen sizes
- Add comments for complex logic
- Update documentation when adding new features

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **NASA Space Apps Challenge** for the problem statement and inspiration
- **ESA Copernicus Program** for Sentinel-1 SAR data concepts
- **React and Vite** communities for excellent documentation
- **Recharts** team for powerful visualization components

##  Contact

**Project Maintainer**: [Jayanth adhithyaa G R]  
**Email**: [jayanthadhithyaagr@gmail.com]  

---

<div align="center">

*"Seeing the world through radio waves"* 


</div>




