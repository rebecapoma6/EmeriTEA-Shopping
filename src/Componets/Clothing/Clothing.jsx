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


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clothing.css";

const Clothing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products?category=Clothing")
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
    setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    // Agregar el producto al carrito con la talla seleccionada
    addToCart({ ...product, size: selectedSizes[product.id] || "" });
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="swiper-slide">
                <img src={product.image} alt={product.name} />
                <div className="description">
                  <div className="nombre">Nombre: {product.Name_product}</div>
                  <div className="precio">Precio: {product.price} €</div>
                  <div className="descripcion">DescripciónAA: {product.description}</div>
                  {Array.isArray(product.size) && product.size.length > 0 && (
                    <div className="talla">Talla: {product.size.join(', ')}</div>
                  )}
                  
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




