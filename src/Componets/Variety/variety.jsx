import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Accesories.css";

import { Pagination, Navigation } from "swiper/modules";

export default function CarrouselAcc() {
  return (
    <>
      {/* <div>
        <h1>Hola Accesorios</h1>
        carrousel de Accesorios
        <p>
          ¡Bienvenido a Hola Accesorios! Esta es una tienda de accesorios
          increíbles.
        </p>
      </div> */}

      <div className="container-swiper">
        <div className="Prendas">Prendas</div>
        <Swiper
          slidesPerView={4}
          // pagination={{
          //   type: 'fraction',
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773927/IMG_7034_apr3kd.jpg"
              alt="gorra"
            />
            <div className="description">
              <div className="nombre">Gorra</div>
              <div className="precio">15,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773924/IMG_7017_o4j0dd.jpg"
              alt=""
            />
             <div className="description">
              <div className="nombre">Jabón</div>
              <div className="precio">10,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773924/20231029_172429_k77nqb.jpg"
              alt=""
            />
           <div className="description">
              <div className="nombre">Camiseta</div>
              <div className="precio">20,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773927/IMG_7034_apr3kd.jpg"
              alt=""
            />
            <div className="description">
              <div className="nombre">Gorra</div>
              <div className="precio">15,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="" alt="" />
            <div className="description">
              <div className="nombre">Gorra</div>
              <div className="precio">15,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="" alt="" />
            <div className="description">
              <div className="nombre">Gorra</div>
              <div className="precio">15,00€</div>
              <div className="comprarycarrito">
                <button>Comprar</button>
                <button>🛒</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
