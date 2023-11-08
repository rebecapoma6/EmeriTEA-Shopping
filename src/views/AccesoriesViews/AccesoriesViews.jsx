import React from "react";
import Accessories from "../../Componets/Accesories/Accesories";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Stock from "../../Componets/stock/stockprendas";

const AccessorieView = () => {
  return (
    <div className="homeinitial">
    
      <Header />
      <CustomNavbar/>
      <div className="container-gris">
      {/* <Accessories /> */}
      <Stock/>
      </div>
      <Footer />
    </div>
  );
};

export default AccessorieView;
