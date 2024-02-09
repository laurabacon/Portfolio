import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import PortfolioComponent from "../components/Portfolio.jsx";


const PortfolioPage = () => { 
  return (
    <section id="portfolio">
      <div>
        <PortfolioComponent /> 
      </div>
    </section>
  );
}

export default PortfolioPage; 
