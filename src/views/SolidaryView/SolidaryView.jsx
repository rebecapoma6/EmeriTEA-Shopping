import React from "react";
// import Accessories from "../../Componets/Accesories/Accesories";
import Header from "../../Componets/Header/header";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
// import Solidary from "../../Componets/Solidary/Solidary"
import Solidarycomp from "../../Componets/solidarycomp/solidarycomp";


const SolidaryView = () => {
  return (
    <div className="homeinitial">
    
      <Header />
      <CustomNavbar/>
      <div className="container-gris">
      <Solidarycomp/>
      </div>
      <Footer />
    
    </div>
  );
};

export default SolidaryView;