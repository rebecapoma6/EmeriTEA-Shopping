// import React from "react";
// import "./Header.css"; // Importa el archivo CSS

// const Header = () => {
//   // Suponiendo que tienes un logo que importas, de lo contrario, reemplaza 'logo.png' con la ruta de tu imagen
//   const logoUrl = "logo.png";

//   return (
//     <div className="mainheader">
//     <header className="Header">
//       <div className="logo-section">
//         <img src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698666190/logo_completo_oukgw0.png" alt="LogoEmeriatea" />
//       </div>
//       <div className="titulo">
//         <h1 className="title">EmeriTEA Market</h1>
//       </div>
//       <div className="buttons">
//                 <button><i className="fa-solid fa-user"></i></button>
//                 <button><i className="fa-solid fa-cart-shopping"></i></button>
//             </div>
//     </header>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css"; // Importa el archivo CSS
import SignInSide from '../../views/Login/Login'; // Ajusta la ruta según la estructura de tu proyecto

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  // Suponiendo que tienes un logo que importas, de lo contrario, reemplaza 'logo.png' con la ruta de tu imagen
  const logoUrl = "logo.png";

  return (
    <div className="mainheader">
      <header className="Header">
        {/* <div className="logo-section">
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698666190/logo_completo_oukgw0.png"
            alt="LogoEmeriatea"
          />
        </div> */}
        <a href="/">
          <div className="logo-section">
            <img
              src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698666190/logo_completo_oukgw0.png"
              alt="LogoEmeriatea"
            />
          </div>
        </a>
        <div className="titulo">
          <h1 className="title">EmeriTEA Market</h1>
        </div>
        <div className="buttons">
          <button onClick={toggleSignIn}><i className="fa-solid fa-user"></i></button>
          <button><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
        {showSignIn && <SignInSide />} {/* Muestra SignInSide si showSignIn es true */}
      </header>
    </div>
  );
};

export default Header;




