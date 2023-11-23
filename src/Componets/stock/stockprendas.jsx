import React, { useState, useEffect } from "react";
import "./stockprendas.css";
import Swal from 'sweetalert2';

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
          initialSelectedSizes[product.id_Product] = ""; // Asegúrate de que el identificador sea correcto
        });
        setSelectedSizes(initialSelectedSizes);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    Swal.fire({
      iconHtml: '<img src="https://cdn-icons-png.flaticon.com/128/4990/4990913.png" style="width: 85px; height: 85px;">',
      title: "Esta acción agregará el producto al carrito. ¿Deseas continuar?",
      // text: "Esta acción agregará el producto al carrito. ¿Deseas continuar?",
      // icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, agregar al carrito",
      cancelButtonText: "Cancelar",
      
    }).then((result) => {
      if (result.isConfirmed) {
        // Agregar el producto al carrito con la talla seleccionada
        addToCart({ ...product, size: selectedSize[product.id_Product] || "" });
        Swal.fire({
        icon: "success",
        title: "Tu artículo se añadió al carrito",
        showConfirmButton: false,
        timer: 1500});
      }
    });
   };
   

  return (
    <>
      <div className="Prendas">Prendas</div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id_Product}>
            <img src={product.image} alt={product.name} className="product-image" />
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
            <button onClick={() => handleAddToCart(product)}>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockprendas;


