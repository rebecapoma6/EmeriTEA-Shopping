// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import {NextUIProvider} from '@nextui-org/react'
// import Login from './views/Login/Login';
// import Admin from './views/Admin/Admin';

// const root = document.getElementById('root');
// const reactRoot = createRoot(root);

// reactRoot.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}
//        <Route path="/login" element={<Login />} />
//       <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Admin from './views/Admin/Admin';
import Home from './Componets/Home/Home';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Agrega una nueva ruta para Home */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
