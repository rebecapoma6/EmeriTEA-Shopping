import "./Footer.css";

const Footer = () => {
  return (
    <footer>
    <div className="Container-Footer">
      <div className="Politicas">
        <h3>Politica de Privacidad</h3>
        <h3>Aviso Legal</h3>
        <h3>Politica de Cookies</h3>
      </div>

      <div className="Redes">

        <div className="industrias">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        </div>

        <div className="Copyright">Copyright © 2019 EmeriTEA</div>

        <div className="Correo">Emerite@emeritea.com</div>

      </div>
    </div>
    </footer>
  );
};

export default Footer;
