import React from 'react';
import Header from '../../Componets/Header/header';
import Admin from '../../Componets/Admin/Admin';
import Footer from '../../Componets/Footer/Footer';
import './AdminView.css'


const ViewAdmin = () => {

  return (
    <>
    <div className="addInitial">
        <Header/>
        <Admin/>
        <Footer/>
    </div>
    </>
  );
}

export default ViewAdmin;