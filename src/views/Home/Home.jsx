import React from 'react';
import "./Home.css";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Accessories from "../../Componets/Accesories/Accesory.jsx";
import Clothing from "../../Componets/Clothing/Clothing";
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary";
import ScrollButton from "../../Componets/Scroll/Scroll";
import Header from "../../Componets/Header/Header";


const Home = ({ addToCart }) => {

  return (
    <>
      <div className="homeinitial">
        <Header />
        <CustomNavbar />
        <div className="container-gris">
          <div className="intro">
            <h2>
              Emeritea Asociación.
              <br />
              Colabora con la compra de cualquier artículo de esta página y
              ayudanos a hacer visible lo invisible.
            </h2>
          </div>
          <Clothing  addToCart={addToCart} />
          <Accessories  addToCart={addToCart} />
          <Solidary  addToCart={addToCart} />
          <br />
          <br />
          <div className="scroll">
            <ScrollButton />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
