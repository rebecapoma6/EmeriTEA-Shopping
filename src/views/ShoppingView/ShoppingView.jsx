
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import ShoppingCart from "../../Componets/Shopping/Shopping";


const ViewShopping = () => {

    return (
      <>
      <div className="addInitial">
          <Header/>
          <CustomNavbar />
          <ShoppingCart />        
          <Footer/>
      </div>
      </>
    );
  }
  
  export default ViewShopping;