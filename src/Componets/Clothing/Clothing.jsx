import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";

const Clothing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});

  useEffect(() => {
    fetch("https://localhost:7032/Product/GetProductsByCategory?categotyId=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSize((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    // Agregar el producto al carrito con la talla seleccionada
    addToCart({ ...product, size: selectedSize[product.id_Product] || "" });
  };

  return (
    <div className="container-swiper">
      <div className="Prendas">Prendas</div>

      <div className="mySwiper">
        <Swiper slidesPerView={4} navigation={true} modules={[Pagination, Navigation]}>
          {products.map((product) => (
            <SwiperSlide key={product.id_Product}>
              <div className="swiper-slide">
                <img src={product.image} alt={product.name_product} />
                <div className="description">
                  <div className="nombre">{product.name_product}</div>
                  <div className="precio">{product.price} €</div>
                  <select
                    className="tallaje"
                    value={selectedSize[product.id_Product] || ""}
                    onChange={(e) => handleSizeChange(product.id_Product, e.target.value)}
                  >
                    <option value="">Seleccione Talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                  <div className="carrito">
                    <button onClick={() => handleAddToCart(product)}>🛒</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clothing;





