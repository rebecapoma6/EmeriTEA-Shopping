import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './Shopping.css';


const ShoppingCart = ({ cart, removeFromCart }) => {
  const [productQuantities, setProductQuantities] = useState(
    cart.map(() => 1) 
  );
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((sum, product, index) => {
      return sum + product.price * productQuantities[index];
    }, 0);
    setTotalPrice(total);
  }, [cart, productQuantities]);

  const removeItemFromCart = (productId) => {
    removeFromCart(productId);
    setProductQuantities((prevQuantities) => {
      const index = cart.findIndex(product => product.id_Product === productId);
      if (index !== -1) {
        const newQuantities = [...prevQuantities];
        newQuantities.splice(index, 1); 
        return newQuantities;
      } else {
        return prevQuantities;
      }
    });

    setTotalPrice((prevTotal) => {
      const productToRemove = cart.find(product => product.id_Product === productId);
      if (productToRemove) {
        return prevTotal - productToRemove.price * productQuantities[index];
      } else {
        return prevTotal;
      }
    });
  };
  const incrementQuantity = (index) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };
  const decrementQuantity = (index) => {
    setProductQuantities((prevQuantities) => {
      if (prevQuantities[index] > 1) {
        const newQuantities = [...prevQuantities];
        newQuantities[index]--;
        return newQuantities;
      } else {
        
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
                <button onClick={() => decrementQuantity(index)}>-</button>
                {productQuantities[index]}
                <button onClick={() => incrementQuantity(index)}>+</button>
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