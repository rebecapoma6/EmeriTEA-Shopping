import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Copyright 2019 EmeriTEA</p>
        </div>
        <div className="footer-legal">
          <ol>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Aviso legal</a></li>
            <li><a href="#">Política de cookies</a></li>
          </ol>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="mailto:emeritea@emeritea.com">emeritea@emeritea.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
