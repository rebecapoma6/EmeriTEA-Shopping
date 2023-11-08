import React, { useState, useEffect } from "react";
import "./stockprendas.css";

const Stock = () => {
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
            <button>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stock;