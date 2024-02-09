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
      <p style={{ flexGrow: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus facilis sunt, ullam quaerat pariatur a sequi nihil alias cumque dolorum possimus dolor exercitationem labore. Nihil debitis saepe a atque?</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;

