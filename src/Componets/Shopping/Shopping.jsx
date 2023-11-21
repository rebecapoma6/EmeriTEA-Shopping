// import React from 'react';
// import './shopping.css';

// const ShoppingCart = ({ cart, removeFromCart }) => {
//  const calculateSubtotal = (product) => {
//    return product.price * product.quantity;
//  };

//  const calculateTotal = () => {
//    return cart.reduce((total, product) => total + calculateSubtotal(product), 0);
//  };

//  return (
//    <div className="shopping-cart">
//      <h2>Carrito de Compras</h2>
//      <table>
//        <thead>
//          <tr>
//            <th>Imagen</th>
//            <th>Nombre del Producto</th>
//            <th>Precio</th>
//            <th>Talla</th>
//            <th>Cantidad</th>
//            <th>Subtotal</th>
//            <th>Eliminar</th>
//          </tr>
//        </thead>
//        <tbody>
//          {cart.map((product , index) => (
//            <tr key={`${product.id}-${index}`}>
//              <td><img className="product-imagecart" src={product.image} alt={product.Name_product} /></td>
//              <td>{product.Name_product}</td>
//              <td>{product.price} €</td>
//              <td>{product.size}</td>
//              <td>{product.quantity}</td>
//              <td>{calculateSubtotal(product)} €</td>
//              <td>
//                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
//              </td>
//            </tr>
//          ))}
//        </tbody>
//      </table>
//      <p>Total: {calculateTotal()} €</p>
//    </div>
//  );
// };

// export default ShoppingCart;



// import React from 'react';
// import './shopping.css';

// const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
//  const calculateSubtotal = (product) => {
//    return product.price * product.quantity;
//  };

//  const calculateTotal = () => {
//    return cart.reduce((total, product) => total + calculateSubtotal(product), 0);
//  };

//  return (
//    <div className="shopping-cart">
//      <h2>Carrito de Compras</h2>
//      <table>
//        <thead>
//          <tr>
//            <th>Imagen</th>
//            <th>Nombre del Producto</th>
//            <th>Precio</th>
//            <th>Talla</th>
//            <th>Cantidad</th>
//            <th>Subtotal</th>
//            <th>Eliminar</th>
//          </tr>
//        </thead>
//        <tbody>
//          {cart.map((product, index) => (
//            <tr key={`${product.id}-${index}`}>
//              <td><img className="product-imagecart" src={product.Image} alt={product.Name_product} /></td>
//              <td>{product.Name_product}</td>
//              <td>{product.Price} €</td>
//              <td>{product.Size}</td>
//              <td>
//                <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
//                {product.quantity}
//                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
//              </td>
//              <td>{calculateSubtotal(product)} €</td>
//              <td>
//                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
//              </td>
//            </tr>
//          ))}
//        </tbody>
//      </table>
//      <p>Total: {calculateTotal()} €</p>
//    </div>
//  );
// };

// export default ShoppingCart;



// import React, { useEffect, useState } from 'react';
// import './shopping.css';

// const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     fetchCartData();
//   }, [cart]); // Vuelve a cargar los datos cuando cambia el carrito

//   const fetchCartData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/cartData');
//       if (!response.ok) {
//         throw new Error('Failed to fetch cart data');
//       }
//       const data = await response.json();
//       setCartData(data);
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   const saveCartData = async (newCartData) => {
//     try {
//       console.log('Fetching from:', 'http://localhost:3001/cartData');
//       const response = await fetch('http://localhost:3001/cartData', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCartData), // Envía directamente el arreglo, sin "cartData"
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save cart data');
//       }
//     } catch (error) {
//       console.error('Error saving cart data:', error);
//     }
//   };

//   const calculateSubtotal = (product) => {
//     return product.Price * product.quantity;
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, product) => total + calculateSubtotal(product), 0);
//   };

//   // Agrega esta función para guardar los datos del carrito cuando cambia
//   const saveCartOnChange = () => {
//     saveCartData(cart);
//   };

//   useEffect(() => {
//     saveCartOnChange();
//   }, [cart]);

//   return (
//     <div className="shopping-cart">
//       <h2>Carrito de Compras</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Imagen</th>
//             <th>Nombre del Producto</th>
//             <th>Precio</th>
//             <th>Talla</th>
//             <th>Cantidad</th>
//             <th>Subtotal</th>
//             <th>Eliminar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((product, index) => (
//             <tr key={`${product.Id_Product}-${index}`}>
//               <td><img className="product-imagecart" src={product.Image} alt={product.Name_product} /></td>
//               <td>{product.Name_product}</td>
//               <td>{product.Price} €</td>
//               <td>{product.Size}</td>
//               <td>
//                 <button onClick={() => updateQuantity(product.Id_Product, product.quantity - 1)}>-</button>
//                 {product.quantity}
//                 <button onClick={() => updateQuantity(product.Id_Product, product.quantity + 1)}>+</button>
//               </td>
//               <td>{calculateSubtotal(product)} €</td>
//               <td>
//                 <button onClick={() => removeFromCart(product.Id_Product)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total: {calculateTotal()} €</p>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './Shopping.css';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, [cart]);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://localhost:3001/cartData');
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }
      const data = await response.json();
      setCartData(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const saveCartData = async (newCartData) => {
    try {
      console.log('Fetching from:', 'http://localhost:3001/cartData');
      const response = await fetch('http://localhost:3001/cartData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCartData),
      });

      if (!response.ok) {
        throw new Error('Failed to save cart data');
      }
    } catch (error) {
      console.error('Error saving cart data:', error);
    }
  };

  const calculateSubtotal = (product) => {
    return product.Price * product.quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + calculateSubtotal(product), 0);
  };

  const saveCartOnChange = () => {
    saveCartData(cart);
  };

  useEffect(() => {
    saveCartOnChange();
  }, [cart]);

  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Talla</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={`${product.id_Product}-${index}`}>
              <td><img className="product-imagecart" src={product.Image} alt={product.Name_product} /></td>
              <td>{product.name_product}</td>
              <td>{product.price} €</td>
              <td>{product.Size}</td>
              <td>
                <button onClick={() => updateQuantity(product.Id_Product, product.quantity - 1)}>-</button>
                {product.quantity}
                <button onClick={() => updateQuantity(product.Id_Product, product.quantity + 1)}>+</button>
              </td>
              <td>{calculateSubtotal(product)} €</td>
              <td>
                <button className="remove-button" onClick={() => removeFromCart(product.Id_Product)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {calculateTotal()} €</p>
    </div>
  );
};

export default ShoppingCart;



