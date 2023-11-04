// import React from "react";
import Clothing from "../../Componets/Clothing/Clothing";
import Header from "../../Componets/Header/header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";

const RopaView = () => {
  return (
    <div className="homeinitial">
    <div>
      <Header />
      <CustomNavbar/>
      <Clothing />
      <Footer />
    </div></div>
  );
};

export default RopaView;
