// import React from "react";
// import Header from "../../Componets/Header/header";
// import "./Home.css";
// import CustomNavbar from "../../Componets/Navbar/Navbar";
// import Accessories from "../../Componets/Accesories/Accesories";
// import Clothing from "../../Componets/Clothing/Clothing"; // Asegúrate de utilizar la ruta correcta para el componente de Clothing
// import Footer from "../../Componets/Footer/Footer";
// import Solidary from "../../Componets/Solidary/Solidary";
// import ScrollButton from "../../Componets/Scroll/Scroll";
// // import { Keyframes } from "@emotion/styled";

// const Home = () => {
//   return (
//     <>
//       <div className="homeinitial">
//         <Header />
//         <CustomNavbar />
//         <div className="container-gris">
//           <div className="intro">
//             <h2>
//               Esta es una tienda solidaria que ha sido creada por la asociación
//               EmeriTEA, con el fin de ayudar a las familias con personas con
//               TEA.
//             </h2>
//           </div>
//           <Clothing />
//           <Accessories/>
//           <Solidary/>
//           {/* <Accessories className="imgc"/>
//           <Solidary className="imgc"/> */}
//           <br />
//           <br />
//           <div className="scroll">
//               <ScrollButton />
//           </div>

//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useRef } from "react";
import Header from "../../Componets/Header/header";
import "./Home.css";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import Accessories from "../../Componets/Accesories/Accesories";
import Clothing from "../../Componets/Clothing/Clothing";
import Footer from "../../Componets/Footer/Footer";
import Solidary from "../../Componets/Solidary/Solidary";
import ScrollButton from "../../Componets/Scroll/Scroll";

const Home = () => {
  const clothingRef = useRef(null);
  const accessoriesRef = useRef(null);
  const solidaryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const componentRefs = [clothingRef, accessoriesRef, solidaryRef];

      componentRefs.forEach((ref) => {
        if (ref.current) {
          const distanciaDesdeTop = ref.current.getBoundingClientRect().top;
          const alturaDeElemento = ref.current.clientHeight;

          if (
            distanciaDesdeTop < window.innerHeight - alturaDeElemento / 3 &&
            distanciaDesdeTop > -alturaDeElemento / 3
          ) {
            ref.current.style.opacity = 1;
          } else {
            ref.current.style.opacity = 0.2; // Puedes ajustar este valor según tu preferencia
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="homeinitial">
        <Header />
        <CustomNavbar />
        <div className="container-gris">
          <div className="intro">
            <h2>
              {/* Esta es una tienda solidaria que ha sido creada por la asociación EmeriTEA, con el fin de ayudar a las familias con personas con TEA. */}
              <br />
              <strong> Emeritea asociación.</strong>
              <br />
              Colabora con la compra de cualquier artículo de esta página y
              ayúdanos a hacer visible lo invisible.
            </h2>
          </div>
          <div className="comp" ref={clothingRef}>
            <Clothing />
          </div>
          <div className="comp" ref={accessoriesRef}>
            <Accessories />
          </div>
          <div className="comp" ref={solidaryRef}>
            <Solidary />
          </div>
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
