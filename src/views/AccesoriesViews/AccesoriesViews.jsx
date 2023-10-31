// import React from 'react';

// function Accessories() {
//   return (
//     <div>
//       <h1>Accesorios</h1>
//       <p>Descubre nuestra amplia gama de accesorios. Desde bolsos hasta joyería, ¡todo lo que necesitas para complementar tu estilo!</p>
//     </div>
//   );
// }

// export default Accessories;

import React from 'react';
import Accessories from '../../Componets/Accesories/Accesories';
//import Accessories from './Accessories/Accesories'; // Asegúrate de proporcionar la ruta correcta

const AccessorieView = () => {
  return (
    <div>
      <h1>Esta es una vista que utiliza Accessories</h1>
      <Accessories />
      {/* Puedes utilizar Accessories en este componente */}
    </div>
  );
};

export default AccessorieView;

