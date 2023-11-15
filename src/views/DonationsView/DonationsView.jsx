import Donations from "../../Componets/Donations/Donations";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import CustomNavbar from "../../Componets/Navbar/Navbar";

const ViewDonations = () => {

    return (
      <>
      <div className="addInitial">
          <Header/>
          <CustomNavbar />
          {/* <div className="container-gris"> */}
          <Donations/>
          <Footer/>
      </div>
      </>
    );
  }
  
  export default ViewDonations;