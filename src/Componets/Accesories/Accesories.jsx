// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Accesories.css";

// import { Pagination, Navigation } from "swiper/modules";

// export default function CarrouselAcc() {
//     return (
//         <>
//             {/* <div>
//         <h1>Hola Accesorios</h1>
//         carrousel de Accesorios
//         <p>
//           ¡Bienvenido a Hola Accesorios! Esta es una tienda de accesorios
//           increíbles.
//         </p>
//       </div> */}

//             <div className="container-swiper">
//                 <div className="Prendas">Prendas</div>
//                 <Swiper
//                     slidesPerView={4}
//                     // pagination={{
//                     //   type: 'fraction',
//                     // }}
//                     navigation={true}
//                     modules={[Pagination, Navigation]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         <img
//                             src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773927/IMG_7034_apr3kd.jpg"
//                             alt="gorra"
//                         />
//                         <div className="description">
//                             <div className="nombre">Gorra</div>
//                             <div className="precio">15,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img
//                             src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773924/IMG_7017_o4j0dd.jpg"
//                             alt=""
//                         />
//                         <div className="description">
//                             <div className="nombre">Jabón</div>
//                             <div className="precio">10,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img
//                             src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773924/20231029_172429_k77nqb.jpg"
//                             alt=""
//                         />
//                         <div className="description">
//                             <div className="nombre">Camiseta</div>
//                             <div className="precio">20,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img
//                             src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773927/IMG_7034_apr3kd.jpg"
//                             alt=""
//                         />
//                         <div className="description">
//                             <div className="nombre">Gorra</div>
//                             <div className="precio">15,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img src="" alt="" />
//                         <div className="description">
//                             <div className="nombre">Gorra</div>
//                             <div className="precio">15,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img src="" alt="" />
//                         <div className="description">
//                             <div className="nombre">Gorra</div>
//                             <div className="precio">15,00€</div>
//                             <div className="comprarycarrito">
//                                 <button>Comprar</button>
//                                 <button>🛒</button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </>
//     );
// }







// import React, { useState, useEffect } from "react";
// import "./Accesories.css";

// const Accesories = () => {
//   const [accessories, setAccessories] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/products?category=Accessories")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch accessories");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAccessories(data);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <>
//       <div className="accesorios-title">
//         <h1>Accesorios</h1>
//       </div>

//       <div className="product-list">
        
//         {accessories.map((product) => (
//           <div key={product.id}>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <p>Name: {product.Name_product}</p>
//             <p>Price: {product.price} €</p>
//             <button>🛒</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Accesories;




import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Accesories.css'; // Asegúrate de ajustar esta importación si tus estilos están en otro archivo

const Accessories = ({ addToCart }) => {
  const [accessories, setAccessories] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos del carrito
  //const { cartItems, addToCart } = useCart();

  

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
                  <div className="size">{product.size} </div>
                  
                  <div className="carrito">
                 {/* <button>🛒</button> */} <button onClick={() => addToCart(product)}> 🛒</button>
                 

    
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
