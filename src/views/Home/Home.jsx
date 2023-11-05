import React from "react";
import Header from "../../Componets/Header/header";
import "./Home.css";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Accessories from "../../Componets/Accesories/Accesories";
import Clothing from "../../Componets/Clothing/Clothing"; // Asegúrate de utilizar la ruta correcta para el componente de Clothing
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary";

const Home = () => {
  return (
    <>
      <div className="homeinitial">
      
        <Header /> 
     
        <CustomNavbar />  
          <div className="container-gris">
        <div className="intro">
          <h2>
            Esta es una tienda solidaria que ha sido creada por la asociación
            EmeriTEA, con el fin de ayudar a las familias con personas con TEA.
          </h2>
        </div>
         <Clothing />
         <Accessories />
         <Solidary/>
        <br /><br />
        </div>
        <Footer/>
        
      </div>
    </>
  );
};

export default Home;