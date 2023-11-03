import React from "react";
import Accessories from "../../Componets/Accesories/Accesories";
import Header from "../../Componets/Header/header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";

const AccessorieView = () => {
  return (
    <div>
      <Header />
      <CustomNavbar/>
      <Accessories />
      <Footer />
    </div>
  );
};

export default AccessorieView;
