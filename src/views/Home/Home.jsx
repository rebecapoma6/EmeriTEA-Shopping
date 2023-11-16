import React from 'react';
import "./Home.css";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Accessories from "../../Componets/Accesories/Accesories";
import Clothing from "../../Componets/Clothing/Clothing";
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary";
import ScrollButton from "../../Componets/Scroll/Scroll";
import Header from "../../Componets/Header/Header";
// import AOS from "aos";
// import 'aos/dist/aos.css';

const Home = ({ addToCart }) => {

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const elements = document.querySelectorAll('.scroll-op');
  //   elements.forEach((element) => {
  //     const elementTop = element.getBoundingClientRect().top;
  //     const elementBottom = element.getBoundingClientRect().bottom;

  //     const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
      
  //     if (isVisible) {
  //       element.classList.add('appear');
  //     } else {
  //       element.classList.remove('appear');
  //     }
  //   });
  // };

  
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
              Colabora con la compra de cualquier articulo de esta pagina y
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
