import React from 'react';
import './footer-css.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Di-Gro is a free TV shows streaming website with zero ads. Enjoy watching TV shows online in high quality for free. You can also download full TV shows and watch them later.
          </p>
          <p>
            This site does not store any files on our server. We only link to media hosted on 3rd party services.
          </p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <div className="footer-links">
            <ul>
              <li>Movies</li>
              <li>TV Series</li>
              <li>Top IMDb</li>
            </ul>
            <ul>
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
            </ul>
            <ul>
              <li>Fantasy</li>
              <li>Horror</li>
              <li>Mystery</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
