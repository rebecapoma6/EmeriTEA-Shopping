import React, { useState, useEffect } from "react";
import "./stockaccesorios.css";

const Stockaccesorios = ({ addToCart }) => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:3000/products?category=Accessories")
    fetch("http://localhost:3000/products?Id_Category=Accessories")
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
          <div key={product.Id_Product}>
            <img
              src={product.Image}
              alt={product.Name_product}
              className="product-image"
            />
            <p>Name: {product.Name_product}</p>
            <p>Price: {product.Price} €</p>
            <p>Descripcion: {product.Description} </p>
            <button onClick={() => handleAddToCart(product)}>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockaccesorios;
