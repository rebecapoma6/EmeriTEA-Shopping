// import React, { useState, useEffect } from 'react';
// import './Home.css'; 


// function Home () {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Aquí debes realizar una solicitud a tu API o servidor para obtener la lista de productos.
//     // Puedes utilizar fetch o axios para hacer la solicitud. A continuación, se muestra un ejemplo
//     // de cómo obtener productos ficticios para propósitos de demostración.

//     // Reemplaza esta parte con la solicitud real a tu API.
//     fetch('/api/products') // Reemplaza '/api/products' con la URL correcta de tu API.
//       .then((response) => response.json())
//       .then((data) => setProducts(data)) // Establece los productos en el estado.
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   return (
    
//     <div>
//       <h1>Nuestros Productos</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.description} />
//             <h3>{product.description}</h3>
//             <p>Precio: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import './Home.css'; 
import Navbar from '../Navbar/Navbar';

function Home () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí debes realizar una solicitud a tu API o servidor para obtener la lista de productos.
    // Puedes utilizar fetch o axios para hacer la solicitud. A continuación, se muestra un ejemplo
    // de cómo obtener productos ficticios para propósitos de demostración.

    // Reemplaza esta parte con la solicitud real a tu API.
    fetch('/api/products') // Reemplaza '/api/products' con la URL correcta de tu API.
      .then((response) => response.json())
      .then((data) => setProducts(data)) // Establece los productos en el estado.
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Nuestros Productos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.description} />
              <h3>{product.description}</h3>
              <p>Precio: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

