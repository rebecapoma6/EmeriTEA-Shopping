import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Accesories.css";
import Swal from 'sweetalert2';

const Accessories = ({ addToCart }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const elements = document.querySelectorAll(".scroll-op");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

      if (isVisible) {
        element.classList.add("appear");
      } else {
        element.classList.remove("appear");
      }
    });
  };

  const [accessories, setAccessories] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
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

  return (
    <div className="scroll-op">
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
              <SwiperSlide key={product.id_Product}>
                <div className="swiper-slide">
                  <img src={product.image} alt={product.name_product} />
                  <div className="description">
                    <div className="nombre">{product.name_product}</div>
                    <div className="precio">{product.price} €</div>
                    <div className="description">{product.descripton} </div>
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
    </div>
  );
};

export default Accessories;
