import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Container-Footer">
        <div className="Politicas">
          {/* <h3>Politica de Privacidad</h3> */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          {/* <h3>Aviso Legal</h3> */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Aviso Legal
          </a>
          {/* <h3>Política de Cookies</h3> */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Política de Cookies
          </a>
        </div>

        <div className="Redes">
          <div className="industrias">
            <a href="https://www.facebook.com/emeritea" className="i1" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCld69xN38u70wGhnsv8kDxQ" className="i3" target="_blank" rel="noreferrer" >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://twitter.com/emeritea_" className="i2" target="_blank"  rel="noreferrer">
              {/* <i className="fa-brands fa-twitter"></i> */}
              <img src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1699375763/iconoTwitter-removebg-preview_xs4zbx.png" alt="twitter" className="twtf"/>
            </a>
                   
          </div>

          {/* <div className="Copyright">Copyright © 2019 EmeriTEA</div> */}
          <a href="" className="Copyright">
            Copyright © 2019 EmeriTEA
          </a>

          <div className="Correo">Emerite@emeritea.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
