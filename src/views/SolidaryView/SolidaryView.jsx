import React from "react";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary"
import Header from "../../Componets/Header/Header";


const SolidaryView = () => {
  return (
    <div className="homeinitial">
    <div>
      <Header/>
      <CustomNavbar/>
      <div className="container-gris">
      <Solidary/>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default SolidaryView;