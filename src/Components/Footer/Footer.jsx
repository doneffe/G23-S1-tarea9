import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-container__ul">
        <li className="footer-container__li">
          <a href="#account">Cuenta</a>
        </li>
        <li className="footer-container__li">
          <a href="#map">Mapa</a>
        </li>
        <li className="footer-container__li">
          <a href="#service">Servicio</a>
        </li>
        <li className="footer-container__li footer-container__li--contacto">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
