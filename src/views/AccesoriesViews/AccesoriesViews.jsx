import React from "react";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Stockaccesorios from "../../Componets/stock/stockaccesorios";

const AccessorieView = ({ addToCart }) => {
  return (
    <div className="homeinitial">
    
      <Header />
      <CustomNavbar/>
      <div className="container-gris">
      {/* <Accessories /> */}
      <Stockaccesorios addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
};

export default AccessorieView;
