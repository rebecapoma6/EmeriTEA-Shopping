import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";


//const Clothing = () => {

const Clothing = ({ handleAddToCart }) => {

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
    <div className="container-swiper">
      <div className="Prendas">Prendas</div>
      <div className="mySwiper">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="swiper-slide">
                <img src={product.image} alt={product.name} />
                <div className="description">
                  <div className="nombre">{product.Name_product}</div>
                  <div className="precio">{product.price} €</div>

                  <select className="tallaje">
                    <option value="">Seleccione Talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>

                  <div className="carrito">
                    {/* <button>🛒</button> */} <button onClick={() => handleAddToCart(product)}>🛒</button>
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
