import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";
import Swal from "sweetalert2";

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

  const [guestCart, setGuestCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const [newGuestCart, setNewGuestCart] = useState({
    price_product: "",
    quantity_product: "",
    total_price: "",
    id_Product: "",
  });

  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  useEffect(() => {
    fetch("https://localhost:7032/Product/GetProductsByCategory?categotyId=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setGuestCart(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSize((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  // useEffect(() => {
  //   // Lógica que depende del estado actualizado de newGuestCart
  //   console.log("Valores de newGuestCart después de setNewGuestCart:", newGuestCart);

  //   // Aquí puedes realizar operaciones que dependan del estado actualizado
  //   // Por ejemplo, el envío de datos u otra lógica.
  //   const guestCartData = {
  //     price_product: newGuestCart.price_product,
  //     quantity_product: newGuestCart.quantity_product,
  //     total_price: newGuestCart.total_price,
  //     id_Product: newGuestCart.id_Product,
  //   };

  //   console.log("Valores de guestCartData:", guestCartData);

  //   // Realizar aquí la lógica que depende del estado actualizado de newGuestCart
  //   // Por ejemplo, enviar los datos a través de una solicitud fetch

  // }, [newGuestCart]);

  const handleAddToCart = (guestCart) => {
    const token = getCookie("jwtToken");
    const defaultQuantity = 0; 
    const defaultTotalPrice = 0;
    if (!selectedSize[guestCart.id_Product]) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, selecciona una talla antes de agregar al carrito.",
        icon: "error",
        confirmButtonText: "De acuerdo",
        confirmButtonColor: "#3085d6",
      });
      return;
    }
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
        addToCart({ ...guestCart, size: selectedSize[guestCart.id_Product] || "" });
        Swal.fire({
          title: "¡Agregado al carrito!",
          text: "El producto ha sido agregado al carrito.",
          timer: 1200,
          showConfirmButton: false, // Añade esta línea
        });
      }
    });
   };
   
  
   

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
            {guestCart.map((product) => (
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
