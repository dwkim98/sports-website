import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-links">
      <div>
        <h4>NBA</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Players</a>
          </li>
          <li>
            <a href="#">Stats</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>About</h4>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Social</h4>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    <p>&copy; 2024 NBA Media Ventures, LLC. All rights reserved.</p>
  </footer>
);

export default Footer;
