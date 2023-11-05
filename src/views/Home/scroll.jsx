// import React, { useState, useEffect } from 'react';
// import './Home.css'; // Asegúrate de tener el nombre de tu archivo CSS correcto

// const ScrollButton = () => {
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", toggleFixed);
//     return () => {
//       window.removeEventListener("scroll", toggleFixed);
//     };
//   }, []);

//   const toggleFixed = () => {
//     if (window.pageYOffset > 100) { // Cambia 100 según la posición de desplazamiento en la que deseas que el botón se fije
//       setIsFixed(true);
//     } else {
//       setIsFixed(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className={`scrollButtonWrapper ${isFixed ? 'fixed' : ''}`}>
//       <button className="scrollToTopBtn" onClick={scrollToTop}>
//      ⬆
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;





// import React, { useState, useEffect } from 'react';
// import './Home.css'; // Asegúrate de tener el nombre de tu archivo CSS correcto

// const ScrollButton = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [clickedOnce, setClickedOnce] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", toggleFixed);
//     return () => {
//       window.removeEventListener("scroll", toggleFixed);
//     };
//   }, []);

//   const toggleFixed = () => {
//     if (window.pageYOffset > 100) {
//       setIsFixed(true);
//     } else {
//       setIsFixed(false);
//     }
//   };

//   const scrollToPosition = () => {
//     if (clickedOnce) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//       setClickedOnce(false);
//     } else {
//       window.scrollTo({
//         top: 720, // Cambia a la altura deseada al hacer clic por primera vez
//         behavior: "smooth"
//       });
//       setClickedOnce(true);
//     }
//   };

//   return (
//     <div className={`scrollButtonWrapper ${isFixed ? 'fixed' : ''}`}>
//       <button className={`scrollToTopBtn ${isFixed ? 'fixed' : ''}`} onClick={scrollToPosition}>
//        ⬆
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;
import React, { useState, useEffect } from 'react';
import './Home.css'; // Asegúrate de tener el nombre de tu archivo CSS correcto

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
      ⬆
      </button>
    </div>
  );
};

export default ScrollButton;
