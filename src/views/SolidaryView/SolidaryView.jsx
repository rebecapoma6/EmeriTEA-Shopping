import React from "react";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import Solidarycomp from "../../Componets/solidarycomp/solidarycomp";
import Header from "../../Componets/Header/Header";

const SolidaryView = () => {
  return (
    <div className="homeinitial">
      <Header />
      <CustomNavbar />
      <div className="container-gris">
        
          <Solidarycomp />
        
      </div>
      <Footer />
    </div>
  );
};

export default SolidaryView;
