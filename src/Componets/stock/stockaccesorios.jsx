import React, { useState, useEffect } from "react";
import "./stockaccesorios.css";

const Stockaccesorios = ({ addToCart }) => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?category=Accessories")
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
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>Name: {product.Name_product}</p>
            <p>Price: {product.price} €</p>
            <p>Descripcion: {product.description} </p>
            <button onClick={() => handleAddToCart(product)}>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockaccesorios;
