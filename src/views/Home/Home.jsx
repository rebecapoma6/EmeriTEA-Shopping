import React from "react";
import Header from "../../Componets/Header/header";
import "./Home.css";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Accessories from "../../Componets/Accesories/Accesories";
import Clothing from "../../Componets/Clothing/Clothing"; // Asegúrate de utilizar la ruta correcta para el componente de Clothing
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary";
import ScrollButton from "../../Componets/Scroll/Scroll";

const Home = () => {
  return (
    <>
      <div className="homeinitial">
        <Header />
        <CustomNavbar />
        <div className="container-gris">
          <div className="intro">
            <h2>
              Emeritea asociación.
              <br />
              Colabora con la compra de cualquier artículo de esta página y
              ayúdanos a hacer visible lo invisible.
            </h2>
          </div>
          <Clothing />
          <Accessories />
          <Solidary />

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
