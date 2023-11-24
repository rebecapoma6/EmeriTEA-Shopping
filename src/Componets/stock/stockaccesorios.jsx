import React, { useState, useEffect } from "react";
import "./stockaccesorios.css";

const Stockaccesorios = ({ addToCart }) => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7032/Product/GetProductsByCategory?categotyId=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch accessories");
        }
        return response.json();
      })
      .then((data) => {
        setAccessories(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <div className="Accesorios">Accesorios</div>
      <div className="product-list">
        {accessories.map((product) => (
          <div key={product.id_Product}>
            <img
              src={product.image}
              alt={product.name_product}
              className="product-image"
            />
            <p>Nombre: {product.name_product}</p>
            <p>Precio: {product.price} €</p>
            <p>Descripción: {product.description} </p>
            <button onClick={() => handleAddToCart(product)}>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockaccesorios;

