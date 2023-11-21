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

  // const calculateSubtotal = (product) => {
  //   return product.price * product.quantity;
  // };
  const calculateSubtotal = (product) => {
    const price = Number(product.price) || 0;
    const quantity = Number(product.quantity) || 0;
    return price * quantity;
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
              <td><img className="product-imagecart" src={product.image} alt={product.name_product} /></td>
              <td>{product.name_product}</td>
              <td>{product.price} €</td>
              <td>{product.size}</td>
              <td>
                <button onClick={() => updateQuantity(product.id_Product, product.quantity - 1)}>-</button>
                {product.quantity}
                <button onClick={() => updateQuantity(product.id_Product, product.quantity + 1)}>+</button>
              </td>
              <td>{calculateSubtotal(product)} €</td>
              <td>
                <button className="remove-button" onClick={() => removeFromCart(product.id_Product)}>
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






// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import './Shopping.css';

// const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     fetchCartData();
//   }, [cart]);

//   const fetchCartData = async () => {
//     try {
//       const response = await fetch('URL_DEL_BACKEND/api/cart'); // Reemplaza 'URL_DEL_BACKEND' con la URL real de tu backend
//       if (!response.ok) {
//         throw new Error('Error al obtener datos del carrito');
//       }
//       const data = await response.json();
//       setCartData(data);
//     } catch (error) {
//       console.error('Error al obtener datos del carrito:', error);
//     }
//   };

//   const saveCartData = async (newCartData) => {
//     try {
//       const response = await fetch('URL_DEL_BACKEND/api/cart', { // Reemplaza 'URL_DEL_BACKEND' con la URL real de tu backend
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCartData),
//       });

//       if (!response.ok) {
//         throw new Error('Error al guardar datos del carrito');
//       }
//     } catch (error) {
//       console.error('Error al guardar datos del carrito:', error);
//     }
//   };

//   const calculateSubtotal = (product) => {
//     return product.Price_product * product.Quantity_product;
//   };

//   const calculateTotal = () => {
//     return cartData.reduce((total, product) => total + calculateSubtotal(product), 0);
//   };

//   const saveCartOnChange = () => {
//     saveCartData(cartData);
//   };

//   useEffect(() => {
//     saveCartOnChange();
//   }, [cartData]);

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
//           {cartData.map((product) => (
//             <tr key={product.Id_guestCart}>
//               <td><img className="product-imagecart" src={product.Product.image} alt={product.Product.name_product} /></td>
//               <td>{product.Product.name_product}</td>
//               <td>{product.Price_product} €</td>
//               <td>{product.Product.size}</td>
//               <td>
//                 <button onClick={() => updateQuantity(product.id_Product, product.Quantity_product - 1)}>-</button>
//                 {product.Quantity_product}
//                 <button onClick={() => updateQuantity(product.id_Product, product.Quantity_product + 1)}>+</button>
//               </td>
//               <td>{calculateSubtotal(product)} €</td>
//               <td>
//                 <button className="remove-button" onClick={() => removeFromCart(product.id_Product)}>
//                   <FontAwesomeIcon icon={faTrashAlt} />
//                 </button>
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




