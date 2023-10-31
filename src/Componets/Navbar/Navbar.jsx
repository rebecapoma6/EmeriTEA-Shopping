
import React from 'react';
import './Navbar.css'; 

const CustomNavbar = () => {
  return (
    <div className="mainnavbar">
    <div className="navbar">
      <a href="https://emeritea.com/quienes-somos/" target="_blank">Quiénes Somos</a>
      <a href="#donaciones">Donaciones</a>
      <div className="dropdown">
        <a href="#productos" className="dropbtn">Productos</a>
          <div className="dropdown-content">
          <a href="#categoria-camisetas">Camisetas</a>
          <a href="#categoria-accesorios">Accesorios</a>
        </div>
      </div>
      <a href="https://emeritea.com/jornadas-y-eventos/" target="_blank">Eventos</a>
      <a href="#ubicacion">Ubicación</a>
    </div>
    </div>
  );
};

export default CustomNavbar;





// import React from 'react';
// import './Navbar.css'; 

// const CustomNavbar = () => {
//   return (
//     <div className="navbar">
//       <a href="#quienes-somos">Quiénes Somos</a>
//       <a href="#donaciones">Donaciones</a>
//       <div className="dropdown">
//         <a href="#productos" className="dropbtn">Productos</a>
//         <div className="dropdown-content">
//           <a href="#categoria-camisetas">Camisetas</a>
//           <a href="#categoria-accesorios">Accesorios</a>
//         </div>
//       </div>
//       <a href="#eventos">Eventos</a>
//       <a href="#ubicacion">Ubicación</a>
//     </div>
//   );
// };

// export default CustomNavbar;
