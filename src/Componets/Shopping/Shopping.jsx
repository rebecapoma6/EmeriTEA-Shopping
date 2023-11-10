// import React, { useState } from 'react';
// import './shopping.css';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);

//     if (existingItem) {
//       const updatedCart = cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//   };

//   const handleUpdateQuantity = (index, quantity) => {
//     const updatedCart = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className='shopping-cart'>
//       <h2>Carrito de Compras</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Cantidad</th>
//             <th>Precio Unitario</th>
//             <th>Subtotal</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => handleUpdateQuantity(index, parseInt(e.target.value))}
//                 />
//               </td>
//               <td>${item.price.toFixed(2)}</td>
//               <td>${(item.price * item.quantity).toFixed(2)}</td>
//               <td>
//                 <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total: ${totalPrice.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ShoppingCart;


// import React, { useState } from 'react';
// import './shopping.css';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//   };

//   const handleUpdateQuantity = (index, quantity) => {
//     const updatedCart = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className='shopping-cart'>
//       <h2>Carrito de Compras</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Cantidad</th>
//             <th>Precio Unitario</th>
//             <th>Subtotal</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => handleUpdateQuantity(index, parseInt(e.target.value))}
//                 />
//               </td>
//               <td>${item.price.toFixed(2)}</td>
//               <td>${(item.price * item.quantity).toFixed(2)}</td>
//               <td>
//                 <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total: ${totalPrice.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ShoppingCart;

// import React, { useState } from 'react';
// import './shopping.css';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//   };

//   const handleUpdateQuantity = (index, quantity) => {
//     const updatedCart = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const addToCart = (product) => {
//     const productInCart = cartItems.find(item => item.id === product.id);

//     if (productInCart) {
//       const updatedCart = cartItems.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className='shopping-cart'>
//       <h2>Carrito de Compras</h2>
//       {/* Aquí podrías tener tu catálogo de productos para seleccionar y agregar al carrito */}
//       {/* Ejemplo de botón para agregar un producto al carrito */}
//       <button onClick={() => addToCart({ id: 1, name: 'Producto Ejemplo', price: 10 })}>
//         Agregar al Carrito
//       </button>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Cantidad</th>
//             <th>Precio Unitario</th>
//             <th>Subtotal</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => handleUpdateQuantity(index, parseInt(e.target.value))}
//                 />
//               </td>
//               <td>${item.price.toFixed(2)}</td>
//               <td>${(item.price * item.quantity).toFixed(2)}</td>
//               <td>
//                 <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total: ${totalPrice.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ShoppingCart;



import React, { useState } from 'react';
import ProductCard from '../../Componets/Card/Card';
import Clothing from '../Clothing/Clothing';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos del carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log('Producto agregado al carrito:', product);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Clothing addToCart={addToCart} />
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.Name_product} />
              <div>{item.Name_product}</div>
              <div>{item.price} €</div>
              <div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;










