import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AccessorieView from './views/AccesoriesViews/AccesoriesViews';
import RopaView from './views/ClothingViews/ClothingViews';
import ViewAdmin from './views/AdminView/AdminView';
import ViewDonations from './views/DonationsView/DonationsView';
import ViewLocation from './views/LocationView/LocationView';
import SolidaryView from './views/SolidaryView/SolidaryView';
import ViewShopping from './views/ShoppingView/ShoppingView';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={<ViewAdmin addToCart={addToCart} />}
          />
          <Route
            path="/donaciones"
            element={<ViewDonations addToCart={addToCart} />}
          />
          <Route
            path="/Location"
            element={<ViewLocation addToCart={addToCart} />}
          />
          <Route
            path="/category-accesories"
            element={<AccessorieView addToCart={addToCart} />}
          />
          <Route
            path="/category-clothing"
            element={<RopaView addToCart={addToCart} />}
          />
          <Route
            path="/Solidary"
            element={<SolidaryView addToCart={addToCart} />}
          />
          <Route
            path="/shopping"
            element={<ViewShopping cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<Main />);


