
import React from 'react';
import Header from '../../Componets/Header/Header';
import CustomNavbar from '../../Componets/Navbar/Navbar';
import ShoppingCart from '../../Componets/Shopping/Shopping';
import Footer from '../../Componets/Footer/Footer';

const ViewShopping = ({ cart, removeFromCart }) => {
  return (
    <>
      <div className="addInitial">
        <Header/>
        <CustomNavbar />
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        <Footer/>
      </div>
    </>
  );
};

export default ViewShopping;
