import React from 'react';
import logoimage from './image/logo.png';
import './head-css.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logoimage} alt="logo" />
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Search'/>
          <button>Search</button>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Series</li>
            <li>Anime</li>
            <li>Top IMDB</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
