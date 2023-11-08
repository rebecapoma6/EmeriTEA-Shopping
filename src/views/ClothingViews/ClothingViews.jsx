// import React from "react";
import Clothing from "../../Componets/Clothing/Clothing";
import Header from "../../Componets/Header/header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Stockprendas from "../../Componets/stock/stockprendas";

const RopaView = () => {
  return (
    <div className="homeinitial">
      {/* <div> */}
      <Header />
      <CustomNavbar />
      <div className="container-gris">
        {/* <Clothing /> */}
        <Stockprendas/>
      </div>
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default RopaView;
