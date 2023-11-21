import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className="mainnavbar">
      {/* <div className="navbar"> */}
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div>
          <a
            href="https://emeritea.com/quienes-somos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiénes Somos
          </a>
        </div>

        {/* <Link to="/donaciones">Donaciones</Link> */}

        <div className="dropdown">
          <Link to="" className="dropbtn">
            Donaciones
          </Link>

          <div className="dropdown-content2">
            <Link to="/donaciones">Haz Tu Donación!</Link>
            <Link to="/Solidary">Haz tu regalo Solidario!</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="" className="dropbtn">
            Productos
          </Link>

          <div className="dropdown-content">
            <Link to="/category-accesories">Accesorios</Link>
            <Link to="/category-clothing">Prendas</Link>
          </div>
        </div>

        <div>
          <Link
            to="https://emeritea.com/jornadas-y-eventos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eventos
          </Link>
        </div>

        <div>
          <Link to="/location">Ubicación</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
