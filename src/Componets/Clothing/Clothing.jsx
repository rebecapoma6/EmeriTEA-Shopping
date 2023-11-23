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
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, agregar al carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart({ ...guestCart, size: selectedSize[guestCart.id_Product]||""});
        setNewGuestCart((prevGuestCart) => ({
          ...prevGuestCart,
          price_product: guestCart.price,
          id_Product: guestCart.id_Product,
          quantity_product: defaultQuantity,
          total_price: defaultTotalPrice,
        }));

        console.log(
          "Valores de newGuestCart después de setNewGuestCart:",
          newGuestCart
        );

        const guestCartData = {
          price_product: newGuestCart.price_product,
          quantity_product: newGuestCart.quantity_product,
          total_price: newGuestCart.total_price,
          id_Product: newGuestCart.id_Product,
        };

        console.log("Valores de guestCartData:", guestCartData);

        fetch(`https://localhost:7032/GuestCardControlle/Post`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(guestCartData),
        })
          .then((response) => {
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
            return response.json();
          })
          .then((data) => {
            setGuestCart((prevGuestCart) => [...prevGuestCart, data]);

            Swal.fire("Success", " Producto agregado al carrito", "success");
            // fetchProducts();
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to add product", "error");
          });
      }
    });
  };

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
