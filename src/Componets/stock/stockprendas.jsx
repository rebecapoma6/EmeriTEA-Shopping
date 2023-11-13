import React, { useState, useEffect } from "react";
import "./stockprendas.css";

const Stockprendas = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products?category=Clothing")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="Prendas">Prendas</div>

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
            <p>Descripcion: {product.description} </p>
            <select
              className="tallaje"
              value={selectedSize}
              onChange={(e) => handleSizeChange(e.target.value)}
            >
              <option value="">Seleccione Talla</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button onClick={() => addToCart({ ...product, size: selectedSize })}>
              🛒
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockprendas;

