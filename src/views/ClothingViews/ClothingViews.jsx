import React from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Stockprendas from "../../Componets/stock/stockprendas";

const RopaView = ({ addToCart }) => {
  return (
    <div className="homeinitial">
      {/* <div> */}
      <Header />
      <CustomNavbar />
      <div className="container-gris">
        {/* <Clothing /> */}
        <Stockprendas addToCart={addToCart}/>
      </div>
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default RopaView;
