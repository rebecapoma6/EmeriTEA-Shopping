import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
// import Location from "../../Componets/Location/Location";
import Mapa from "../../Componets/Maps/Maps";
import CustomNavbar from "../../Componets/Navbar/Navbar";
import './LocationView.css'


const ViewLocation = () => {

    return (
      <>
       <div className="addInitial">
          <Header/>  
          <CustomNavbar />
          <div className="container-gris">
          {/* <Location/> */}
          <Mapa/>      
          </div>
          <Footer/>
      </div>
      </>
    );
  }
  
  export default ViewLocation;