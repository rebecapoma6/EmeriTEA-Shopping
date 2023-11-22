import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";
import Swal from 'sweetalert2';

const Clothing = ({ addToCart }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger just once
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

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

  // const handleAddToCart = (product) => {
  //   // Agregar el producto al carrito con la talla seleccionada
  //   addToCart({ ...product, size: selectedSize[product.id_Product] || "" });
  // };
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
   

  // export default function Componente() {

  return (
    <motion.div
      className="js"
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="container-swiper">
        <div className="Prendas">Prendas</div>

        <div className="mySwiper">
          <Swiper
            slidesPerView={4}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
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
                      onChange={(e) =>
                        handleSizeChange(product.id_Product, e.target.value)
                      }
                    >
                      <option value="">Seleccione Talla</option>
                      {product.size &&
                        product.size.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                    </select>

                    <div className="carrito">
                      <button onClick={() => handleAddToCart(product)}>
                        🛒
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Clothing;
