import React from 'react';
import './shopping.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ShoppingCart = ({ cart, removeFromCart }) => {
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
     <thead className="mi-tabla-cabecera">
  <tr>
    <th></th>
    <th>Producto</th>
    <th>Precio</th>
    <th>Talla</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    <th>Eliminar</th>
  </tr>
</thead>
       <tbody>
         {cart.map((product) => (
           <tr key={product.id}>
             <td><img className="product-imagecart" src={product.image} alt={product.Name_product} /></td>
             <td>{product.Name_product}</td>
             <td>{product.price} €</td>
             <td>{product.size}</td>
             <td>{product.quantity}</td>
             <td>{calculateSubtotal(product)} €</td>
             <td>
               {/* <button onClick={() => removeFromCart(product.id)}>Eliminar</button> */}
               <button onClick={() => removeFromCart(product.id)}>
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

