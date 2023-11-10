import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";
import ProductCard from "../../Componets/Card/Card";


const Clothing = ({ addToCart }) => {



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
          // className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="swiper-slide">
                <img src={product.image} alt={product.name} />
                <div className="description">
                  <div className="nombre">Nombre :{product.Name_product}</div>
                  <div className="precio">Precio :{product.price} €</div>
                  <div className="description">Descripcion :{product.descripton} </div>
                  <div className="size">Tamaño :{product.size} </div>

                  <div className="botones-card">
                  {/* <select className="tallaje">
                    <option value="">Seleccione Talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select> */}

                  <div className="carrito">
                    <button onClick={() => addToCart(someProduct)}>Add to Cart 🛒</button>
                  </div>
     
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

