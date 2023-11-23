

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
        <p className="pTotal">Total: {totalPrice} €</p>
        <button className="buy-button" onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;





