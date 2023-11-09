
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";


import Clothing from "../../Componets/Clothing/Clothing";
import Accesories from "../../Componets/Accesories/Accesories";


const ViewShopping = () => {

    return (
      <>
      <div className="addInitial">
          <Header/>
          <CustomNavbar />
          <ShoppingCart />
          <Clothing/>
          <Accesories/>
          <Footer/>
      </div>
      </>
    );
  }
  
  export default ViewShopping;