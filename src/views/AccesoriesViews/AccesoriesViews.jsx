import React from "react";
import Accessories from "../../Componets/Accesories/Accesories";
import Header from "../../Componets/Header/header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";

const AccessorieView = () => {
  return (
    <div className="homeinitial">
    <div>
      <Header />
      <CustomNavbar/>
      <div className="container-gris">
      <Accessories />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default AccessorieView;
