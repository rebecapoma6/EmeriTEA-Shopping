// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Clothing.css";

// const Clothing = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedSize, setSelectedSize] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/products?category=Clothing")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         return response.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleAddToCart = (product) => {
//     // Agregar el producto al carrito con la talla seleccionada
//     addToCart({ ...product, size: selectedSize });
//   };

//   return (
//     <div className="container-swiper">
//       <div className="Prendas">Prendas</div>

//       <div className="mySwiper">
//         <Swiper
//           slidesPerView={4}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className="swiper-slide">
//                 <img src={product.image} alt={product.name} />
//                 <div className="description">
//                   <div className="nombre">Nombre: {product.Name_product}</div>
//                   <div className="precio">Precio: {product.price} €</div>
//                   <div className="descripcion">Descripción: {product.description}</div>

//                   <div className="tallas">
//                     <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
//                       <option value="">Seleccione Talla</option>
//                       {product.sizes && product.sizes.map((size) => (
//                         <option key={size} value={size}>{size}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="carrito">
//                     <button onClick={() => handleAddToCart(product)}>🛒</button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Clothing;

//_____________________________________________________________________________________________________________________________________

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Clothing.css";

// const Clothing = ({ addToCart }) => {
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const elements = document.querySelectorAll(".scroll-op");
//     elements.forEach((element) => {
//       const elementTop = element.getBoundingClientRect().top;
//       const elementBottom = element.getBoundingClientRect().bottom;

//       const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

//       if (isVisible) {
//         element.classList.add("appear");
//       } else {
//         element.classList.remove("appear");
//       }
//     });
//   };

//   const [products, setProducts] = useState([]);
//   const [selectedSize, setSelectedSize] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:3000/products?Id_Category=Clothing")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         return response.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error al cargar productos:", error));
//   }, []);

//   const handleSizeChange = (productId, size) => {
//     setSelectedSize((prevSizes) => ({ ...prevSizes, [productId]: size }));
//   };

//   const handleAddToCart = (product) => {
//     // Agregar el producto al carrito con la talla seleccionada
//     addToCart({ ...product, size: selectedSize[product.Id_Product] || "" });
//   };

//   return (
//     <>
//       <div className="scroll-op">
//         <div className="container-swiper">
//           <div className="Prendas">Prendas</div>

//       <div className="mySwiper">
//         <Swiper
//           slidesPerView={4}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product.Id_Product}>
//               <div className="swiper-slide">
//                 <img src={product.Image} alt={product.Name_product} />
//                 <div className="description">
//                   <div className="nombre">{product.Name_product}</div>
//                   <div className="precio">{product.Price} €</div>
//                   <select
//                     className="tallaje"
//                     value={selectedSize[product.Id_Product] || ""}
//                     onChange={(e) => handleSizeChange(product.Id_Product, e.target.value)}
//                   >
//                     <option value="">Seleccione Talla</option>
//                     <option value="XS">XS</option>
//                     <option value="S">S</option>
//                     <option value="M">M</option>
//                     <option value="L">L</option>
//                     <option value="XL">XL</option>
//                   </select>

//                   <div className="carrito">
//                     <button onClick={() => handleAddToCart(product)}>🛒</button>
//                   </div>
//                   </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Clothing;

//____________________________________________________________________________________________________________________________________

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
        addToCart({ ...product, size: selectedSize[product.id_Product] || "" });
        Swal.fire({
          title: "¡Agregado al carrito!",
          text: "El producto ha sido agregado al carrito.",
          timer: 1200,
          showConfirmButton: false, // Añade esta línea
        });
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
