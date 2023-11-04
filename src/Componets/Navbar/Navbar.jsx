import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <div className="mainnavbar">
      <div className="navbar">
        <a href="https://emeritea.com/quienes-somos/" target="_blank" rel="noopener noreferrer">Quiénes Somos</a>
        <Link to="/donaciones">Donaciones</Link>
        <div className="dropdown">
          <Link to="" className="dropbtn">Productos</Link>
          <div className="dropdown-content">
            <Link to="/category-accesories">Accesorios</Link>
            <Link to="/category-clothing">Prendas</Link>
          </div>
        </div>
        <Link to="https://emeritea.com/jornadas-y-eventos/" target="_blank" rel="noopener noreferrer">Eventos</Link>
        <Link to="/location">Ubicación</Link>
      </div>
    </div>
  );
};

export default CustomNavbar;



