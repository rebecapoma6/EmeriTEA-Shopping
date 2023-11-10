import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Accesories.css'; 

const Accessories = ({ addToCart }) => {
  const [accessories, setAccessories] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    fetch('http://localhost:3000/products?category=Accessories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch accessories');
        }
        return response.json();
      })
      .then((data) => {
        setAccessories(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="container-swiper">
      <div className="Accesorios">Accesorios</div>
      <div className="mySwiperd">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {accessories.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="swiper-slide">
                <img src={product.image} alt={product.name} />
                <div className="description">
                  <div className="nombre">{product.Name_product}</div>
                  <div className="precio">{product.price} €</div>
                  <div className="description">{product.descripton} </div>
                  <div className="carrito">
                    {/* <button onClick={() => addToCart(product)}> 🛒</button> */}
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

export default Accessories;

