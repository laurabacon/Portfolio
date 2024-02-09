import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import aboutMePic from '../assets/ContactMePhoto.png';

const About = () => {
  return (
    <div>
      <Header />
      <h3>About Me</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={aboutMePic} alt="developer picture" style={{ width: '300px', height: 'auto' }} />
      <p style={{ flexGrow: 1 }}>Dedicated and results-driven professional with a proven track record in Quality Assurance, Admissions Management, and Customer Service. Seeking a challenging role where I can leverage my skills in data analysis, team leadership, process improvement, and consultative sales to contribute to an organization's success and growth.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;

