import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home'; // Assuming Home component exists

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <Home />;
  };

  return (
    <>
      <div>
        {renderTab()}
      </div>
    </>
  );
}

export default App;

