import React from "react";
import "./solidarycomp.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solidarycomp = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="pedido-view">
      <div className="formularios-solidary">
       
        <form>
          <label>Tú nombre</label>
          <input type="text" placeholder="Ingrese su nombre" />
        </form>

        
        <form>
          <label>¿Qué producto quieres?</label>
          <select>
            <option value="personalizado">Personalizado</option>
            <option value="mayor">Al por mayor</option>
          </select>
        </form>

    
        <form>
          <label>Detalles del pedidos</label>
          <textarea placeholder="Ingrese los detalles del pedido"></textarea>
        </form>

        <strong>Ponte en contacto con nosotros</strong>
        <button>Enviar!</button>
      </div>

      <div className="imagenes-desplazables">
        <Slider {...settings}>
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699188503/IMG_7020_l7rywz_1_-removebg-preview_xka4xr.png"
            alt="Imagen 1"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699188503/IMG_7058._nb0z2u_1_-removebg-preview_werd0w.png"
            alt="Imagen 2"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699188503/IMG_7016_xcyakf_1_-removebg-preview_jomse0.png"
            alt="Imagen 3"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698773938/IMG-20231029-WA0098_pfxyej.jpg"
            alt="Imagen 4"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699188503/IMG_7022_ahj80b_1_-removebg-preview_virgkz.png"
            alt="Imagen 5"
          />
  
        </Slider>
      </div>
    </div>
  );
};

export default Solidarycomp;
