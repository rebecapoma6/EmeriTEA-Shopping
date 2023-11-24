import React, { useState } from "react";
import "./Header.css";
import SignInSide from "../../views/Login/Login";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const token = getCookie("jwtToken");
  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };
  const logout = () => {
    document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    history.push('/');
  };
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

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
          {token ? (
            <Link to="/">
              <button onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </Link>
          ) : null}
        </div>
        {showSignIn && <SignInSide />}
      </header>
    </div>
  );
};

export default Header;
