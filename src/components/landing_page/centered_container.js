import React from 'react';
import './CenteredContainer.css';
import logo from './image/logo.png';

const CenteredContainer = ({ navigateToHome }) => {
  return (
    <div className="centered-container">
      <div className='logo-fei'>
        <img src={logo} alt='logo'/>
      </div>
      <h1>Welcome To Di-Gro Movies</h1>
      <p className="description">
        Explore a vast collection of movies and TV series. Get ready for an
        amazing entertainment experience!
      </p>
      <div className='browse-mov'>
        <button onClick={navigateToHome}>Browse All Movies And Series</button>
      </div>
    </div>
  );
};

export default CenteredContainer;
