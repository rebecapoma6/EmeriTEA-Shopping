import React from 'react';
import './Donations.css'

const Donations = () => {
  return (
    <div className="donation-container">
      <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1699433973/bizzum_xwkmye.jpg" className='donation-image' alt="Imagen de la donación" />
      <div className="instructions">
        <h2>¿Cómo hacer una donación por Bizum?</h2>
        <p>
          Para realizar una donación por Bizum, sigue estos pasos:
        </p>
        <ol>
          <li>Abre la aplicación de Bizum en tu teléfono.</li>
          <li>Selecciona la opción de enviar dinero.</li>
          <li>Introduce el número de teléfono al que deseas hacer la donación.</li>
          <li>Ingresa la cantidad que deseas donar.</li>
          <li>Añade un mensaje o motivo de la donación si lo deseas.</li>
          <li>Confirma la transacción.</li>
        </ol>
        <p>¡Gracias por tu generosidad!</p>
      </div>
    </div>
  );
};

export default Donations;
