// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './views/Login/Login';
// import Admin from './views/Admin/Admin';
// import Home from './Componets/Home/Home';
// import './index.css'

// const root = document.getElementById('root');
// const reactRoot = createRoot(root);

// reactRoot.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Agrega una nueva ruta para Home */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './views/Login/Login';
// import Admin from './views/Admin/Admin';
// import Home from './Componets/Home/Home';
// import Clothing from './views/Clothing/Clothing';
// import Accessories from './views/Accesories/Accesories';

// const root = document.getElementById('root');
// const reactRoot = createRoot(root);

// reactRoot.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/category-clothing" element={<Clothing />} /> {/* Nueva ruta para Clothing */}
//         <Route path="/category-accesories" element={<Accessories />} /> {/* Nueva ruta para Accessories */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Admin from './views/Admin/Admin';
import Home from './Componets/Home/Home';
import './index.css';
import AccessorieView from './views/AccesoriesViews/AccesoriesViews';
import RopaView from './views/ClothingViews/ClothingViews';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Agrega una nueva ruta para Home */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/category-accesories" element={<AccessorieView />} /> {/* Ruta para Accessories */}
        <Route path="/category-clothing" element={<RopaView/>} /> {/* Ruta para Clothing */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

