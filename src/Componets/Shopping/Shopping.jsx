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



import React from 'react';
import './shopping.css';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
 const calculateSubtotal = (product) => {
   return product.price * product.quantity;
 };

 const calculateTotal = () => {
   return cart.reduce((total, product) => total + calculateSubtotal(product), 0);
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
           <tr key={`${product.id}-${index}`}>
             <td><img className="product-imagecart" src={product.Image} alt={product.Name_product} /></td>
             <td>{product.Name_product}</td>
             <td>{product.Price} €</td>
             <td>{product.Size}</td>
             <td>
               <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
               {product.quantity}
               <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
             </td>
             <td>{calculateSubtotal(product)} €</td>
             <td>
               <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
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


