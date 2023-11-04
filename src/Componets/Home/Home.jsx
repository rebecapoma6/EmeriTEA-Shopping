// import React from "react";
// import Header from "../Header/header";
// import "./Home.css";
// import CustomNavbar from "../Navbar/Navbar";
// import CarrouselAcc from "../Accesories/Accesories";

// const Home = () => {
//   return (
//     <>
//       <div className="homeinitial">
//         <Header />

//         <CustomNavbar />
//         <div className="intro">
//           <h2>
//             Esta es una tienda solidaria que a sido creada por la asociacion
//             EmeriTEA, con fin de ayudar a las familias con personas con TEA.
//           </h2>
//         </div>
//     <CarrouselAcc/> 
//     {/* <CarrouselAcc/> */}

        
        
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
//         <br />        <br />
             
//          </div>
//     </>
//   );
// };

// export default Home;



import React from "react";
import Header from "../Header/header";
import "./Home.css";
import CustomNavbar from "../Navbar/Navbar";
import Accessories from "../Accesories/Accesories";
import Clothing from "../Clothing/Clothing"; // Asegúrate de utilizar la ruta correcta para el componente de Clothing
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="homeinitial">
        <Header />
        <CustomNavbar />
        <div className="intro">
          <h2>
            Esta es una tienda solidaria que ha sido creada por la asociación
            EmeriTEA, con el fin de ayudar a las familias con personas con TEA.
          </h2>
        </div>
         <Clothing />
         <Accessories />
        <br /><br />
        <Footer/>
      </div>
    </>
  );
};

export default Home;

