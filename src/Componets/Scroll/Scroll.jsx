
import React, { useState, useEffect } from 'react';
import './Scroll.css'; // Asegúrate de tener el nombre de tu archivo CSS correcto

const ScrollButton = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleFixed);
    return () => {
      window.removeEventListener("scroll", toggleFixed);
    };
  }, []);

  const toggleFixed = () => {
    if (window.pageYOffset > 100) { // Cambia 100 según la posición de desplazamiento en la que deseas que el botón se fije
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const scrollToPosition = () => {
    if (clickedOnce) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setClickedOnce(false);
    } else {
      window.scrollTo({
        top: 720, // Cambia a la altura deseada al hacer clic por primera vez
        behavior: "smooth"
      });
      setClickedOnce(true);
    }
  };

  return (
      <div className={`scrollButtonWrapper ${isFixed ? 'relative' : ''}`}>
      <button className="scrollToTopBtn" onClick={scrollToPosition}>
      <img src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699445878/boton_scroll_poyfcs.png" alt="Botonscroll" />
      </button>
     
    </div>
  );
};

export default ScrollButton;
