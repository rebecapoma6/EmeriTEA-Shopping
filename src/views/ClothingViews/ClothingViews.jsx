// import React from 'react';

// function Clothing() {
//   return (
//     <div>
//       <h1>Hola Clothing</h1>
//       <p>¡Bienvenido a Hola Clothing! Esta es una tienda de ropa increíble.</p>
//     </div>
//   );
// }

// export default Clothing;


import React from 'react';
import Clothing from '../../Componets/Clothing/Clothing';
// import Clothing from './ruta/a/Clothing'; // Ajusta la ruta correcta a Clothing

const RopaView = () => {
  return (
    <div>
      <h1>Vista que utiliza Clothing</h1>
      <Clothing />
      {/* Puedes utilizar Clothing en este componente */}
    </div>
  );
};

export default RopaView;
