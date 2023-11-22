import React, { useState } from "react";
import "./Header.css";
import SignInSide from "../../views/Login/Login"; // Ajusta la ruta según la estructura de tu proyecto

import { Link } from "react-router-dom";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const logoUrl =
    "https://res.cloudinary.com/dq2tfglqq/image/upload/v1698666190/logo_completo_oukgw0.png";

  return (
<div className="mainheader">
  <header className="Header">
    <Link to="/">
      <div className="logo-section">
        <img src={logoUrl} alt="LogoEmeriatea" />
      </div>
    </Link>
    <div className="titulo">
      <h1 className="title">EmeriTEA Market</h1>
    </div>

    <div className="buttons">
      <button onClick={toggleSignIn}>
        <i className="fa-solid fa-user"></i>
      </button>
      <Link to="/shopping">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>

    {showSignIn && <SignInSide />}
  </header>
</div>
  );
};

export default Header;
