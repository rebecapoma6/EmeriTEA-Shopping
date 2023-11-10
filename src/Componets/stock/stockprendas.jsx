import React, { useState, useEffect } from "react";
import "./stockprendas.css";

const Stockprendas = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?category=Clothing")
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
          <div className="Prendas">Prendas</div>

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
            {/* <p>Talla: {product.size} </p> */}
            <select className="tallaje">
                    <option value="">Seleccione Talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
            <button>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockprendas;