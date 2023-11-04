import React, { useState, useEffect } from "react";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import "./Clothing.css"


const Clothing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?category=Clothing")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          
          <p>Name: {product.Name_product}</p>
          <p>Price: {product.price} €</p>

          <select className="tallaje">
            <option value="">Seleccione Talla</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <br />
          <br />
          <button>🛒</button>
        </div>
      ))}
    </div>
  );
};

export default Clothing;
