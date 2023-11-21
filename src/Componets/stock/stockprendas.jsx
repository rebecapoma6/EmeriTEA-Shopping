import React, { useState, useEffect } from "react";
import "./stockprendas.css";

const Stockprendas = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    //fetch("http://localhost:3000/products?category=Clothing")
    fetch("https://localhost:7032/Product/GetProductsByCategory?categotyId=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // Inicializa las tallas seleccionadas para cada producto
        const initialSelectedSizes = {};
        data.forEach((product) => {
          initialSelectedSizes[product.id] = "";
        });
        setSelectedSizes(initialSelectedSizes);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  return (
    <>
      <div className="Prendas">Clothing</div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>Name: {product.name_product}</p>
            <p>Price: {product.price} €</p>
            <p>Descripcion: {product.description} </p>
            <select
              className="tallaje"
              value={selectedSizes[product.id_Product] || ""}
              onChange={(e) => handleSizeChange(product.id_Product, e.target.value)}
            >
              <option value="">Seleccione Talla</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button onClick={() => addToCart({ ...product, Size: selectedSizes[product.id] })}>
              🛒
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockprendas;

