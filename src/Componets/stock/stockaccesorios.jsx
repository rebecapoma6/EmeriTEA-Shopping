import React, { useState, useEffect } from "react";
import "./stockaccesorios.css";
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción agregará el producto al carrito. ¿Deseas continuar?",
      iconHtml: '<img src="https://cdn-icons-png.flaticon.com/128/7344/7344044.png" style="width: 85px; height: 85px; border: none;">',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, agregar al carrito",
      cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Agregado al carrito!",
        text: "El producto ha sido agregado al carrito.",
        timer: 1200,
        showConfirmButton: false, // Añade esta línea
      });
    }
  });
}

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
            <p>Name: {product.name_product}</p>
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

