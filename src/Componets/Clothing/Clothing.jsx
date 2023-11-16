import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";

const Clothing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?Id_Category=Clothing")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.map((product) => ({ ...product, selectedSize: "" })));
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const handleSizeChange = (index, size) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts[index].selectedSize = size;
      return newProducts;
    });
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, size: product.selectedSize });
  };

  return (
    <div className="container-swiper">
      <div className="Prendas">Prendas</div>

      <div className="mySwiper">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.Id_Product}>
              <div className="swiper-slide">
                <img src={product.Image} alt={product.Name_product} />
                <div className="description">
                  <div className="nombre">{product.Name_product}</div>
                  <div className="precio">{product.Price} €</div>
                  <select
                    className="tallaje"
                    value={product.selectedSize}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
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





