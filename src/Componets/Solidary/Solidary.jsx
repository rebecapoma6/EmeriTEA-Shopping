import "./Solidary.css";

const Solidary = () => {
  return (
    <div className="solidary">
      <div className="solidary-title">
        <h1>Haz tu Regalo Solidario!</h1>
      </div>

      {/* <div className="container-blue"></div> */}

      <div className="blueContainer">

        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698307535/56395180_2288360644737492_4027331803428683776_o_ubonnv.jpg"
            alt="Imagen 1"
            className="image1"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698307096/277586544_306363718275115_4307754718125977698_n_xupbn4.jpg"
            alt="Imagen 2"
            className="image2"
          />
        </div>

        <div className="textContainer">
          <h2>
            Haz tu regalo personalizado para eventos, fiestas, bodas,
            cumpleaños, etc...!
          </h2>
          <button>Más información aquí!</button>
        </div>

        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698307033/emeritea_2022__E2_94_AC_C2_AE-9_pymwfr.jpg"
            alt="Imagen 3"
            className="image3"
          />
          <img
            src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1698307515/cabalgata-reyes_e3poli.jpg"
            alt="Imagen 4"
            className="image4"
          />
        </div>
      </div>
    </div>
  );
};

export default Solidary;