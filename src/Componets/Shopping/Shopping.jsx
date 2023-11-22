// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import './Shopping.css';

// const ShoppingCart = ({ cart, removeFromCart }) => {
//   const [productQuantities, setProductQuantities] = useState(
//     cart.map(() => 1) // Inicializa todas las cantidades en 1 por defecto
//   );

//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     // Calcula la suma total de los precios teniendo en cuenta la cantidad de cada producto
//     const total = cart.reduce((sum, product, index) => {
//       return sum + product.price * productQuantities[index];
//     }, 0);
//     setTotalPrice(total);
//   }, [cart, productQuantities]);

//   const removeItemFromCart = (productId) => {
//     // Usa removeFromCart para eliminar un producto del carrito
//     removeFromCart(productId);

//     // Actualiza las cantidades y el total después de eliminar un producto
//     setProductQuantities((prevQuantities) => {
//       const newQuantities = [...prevQuantities];
//       newQuantities.pop(); // Elimina la última cantidad porque eliminamos un producto
//       return newQuantities;
//     });
//   };

//   const incrementQuantity = () => {
//     setProductQuantities((prevQuantities) => [...prevQuantities, 1]);
//   };

//   const decrementQuantity = () => {
//     setProductQuantities((prevQuantities) => {
//       if (prevQuantities.length > 1) {
//         const newQuantities = [...prevQuantities];
//         newQuantities.pop(); // Elimina la última cantidad
//         return newQuantities;
//       } else {
//         // No permitas que la cantidad sea menor que 1
//         return prevQuantities;
//       }
//     });
//   };

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
//             <tr key={`${product.id_Product}-${index}`}>
//               <td><img className="product-imagecart" src={product.image} alt={product.name_product} /></td>
//               <td>{product.name_product}</td>
//               <td>{product.price} €</td>
//               <td>{product.size}</td>
//               <td>
//                 <button onClick={() => decrementQuantity()}>-</button>
//                 {productQuantities[index]}
//                 <button onClick={() => incrementQuantity()}>+</button>
//               </td>
//               <td>{product.price * productQuantities[index]} €</td>
//               <td>
//                 <button className="remove-button" onClick={() => removeItemFromCart(product.id_Product)}>
//                   <FontAwesomeIcon icon={faTrashAlt} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total: {totalPrice} €</p>
//     </div>
//   );
// };

// export default ShoppingCart;







import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './Shopping.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const [productQuantities, setProductQuantities] = useState(
    cart.map(() => 1) // Inicializa todas las cantidades en 1 por defecto
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcula la suma total de los precios teniendo en cuenta la cantidad de cada producto
    const total = cart.reduce((sum, product, index) => {
      return sum + product.price * productQuantities[index];
    }, 0);
    setTotalPrice(total);
  }, [cart, productQuantities]);

  const removeItemFromCart = (productId) => {
    // Usa removeFromCart para eliminar un producto del carrito
    removeFromCart(productId);

    // Actualiza las cantidades y el total después de eliminar un producto
    setProductQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities.pop(); // Elimina la última cantidad porque eliminamos un producto
      return newQuantities;
    });
  };

  const incrementQuantity = () => {
    setProductQuantities((prevQuantities) => [...prevQuantities, 1]);
  };

  const decrementQuantity = () => {
    setProductQuantities((prevQuantities) => {
      if (prevQuantities.length > 1) {
        const newQuantities = [...prevQuantities];
        newQuantities.pop(); // Elimina la última cantidad
        return newQuantities;
      } else {
        // No permitas que la cantidad sea menor que 1
        return prevQuantities;
      }
    });
  };

  const handleBuy = () => {
    // Aquí puedes agregar la lógica para realizar la compra
    console.log('Compra realizada. Productos:', cart, 'Total:', totalPrice);
  };

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
                <button onClick={decrementQuantity}>-</button>
                {productQuantities[index]}
                <button onClick={incrementQuantity}>+</button>
              </td>
              <td>{product.price * productQuantities[index]} €</td>
              <td>
                <button className="remove-button" onClick={() => removeItemFromCart(product.id_Product)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkout-container">
        <p>Total: {totalPrice} €</p>
        <button className="buy-button" onClick={handleBuy}>
          Comprar
        </button>
      </div>
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




