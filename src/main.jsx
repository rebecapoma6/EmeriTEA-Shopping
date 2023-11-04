import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './Componets/Home/Home';
import './index.css';
import AccessorieView from './views/AccesoriesViews/AccesoriesViews';
import RopaView from './views/ClothingViews/ClothingViews';
import ViewAdmin from './views/AdminView/AdminView';
import ViewDonations from './views/DonationsView/DonationsView';


const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ViewAdmin />} />
        <Route path="/donaciones" element={<ViewDonations />} />
        <Route path="/category-accesories" element={<AccessorieView />} />
        <Route path="/category-clothing" element={<RopaView/>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

