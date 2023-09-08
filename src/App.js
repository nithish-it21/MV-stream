import React, { useState } from 'react';
import Header from './components/landing_page/header.js';
import MainContent from './components/landing_page/content.js';
import Footer from './components/landing_page/footer.js';
import CenteredContainer from './components/landing_page/centered_container';
import Home from './components/landing_page/home';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('centered_container');

  // Define a function to change the current page
  const navigateToHome = () => {
    setCurrentPage('home'); // Change the current page to 'home'
  };

  return (
    <div className="App">
      {currentPage === 'centered_container' && (
        <div>
          <Header />
          <CenteredContainer navigateToHome={navigateToHome} />
          <MainContent />
          <Footer />
        </div>
      )}
      {currentPage === 'home' && <Home />}
    </div>
  );
}

export default App;
