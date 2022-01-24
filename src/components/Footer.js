import React from "react";
import "../Styles/Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CallIcon from "@material-ui/icons/Call";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="ContacId" className="Footer row col-12 p-0">
      <div className="FooterUp">
        <div className=" row col-11 col-lg-10 col-xl-8 mx-auto p-0">
          <div className="FooterLogo col-12 col-lg-2 col-xl-3 p-0 d-flex justify-content-center ">
            <img src="logo.png" alt="" />
          </div>
          <div className="FooterIcons row col-12 col-lg-10 col-xl-9 p-0 d-flex justify-content-end">
            <span className="PBX col-12 col-sm-4  d-flex justify-content-center p-0">
              <CallIcon style={{ color: "white", transform: "scaleX(-1)" }} />
              <p>PBX: 57 (2) 386 5770</p>
            </span>
            <span className="Track col-12 col-sm-3 d-flex justify-content-center  p-0">
            <p className="DividingLine">|</p>
              <a href={"https://www.google.com/maps"}>
                <LocalShippingIcon style={{ color: "white" }} />
              </a>
              <p>
                Rastrea <br /> mi pedido
              </p>
            </span>
            <span className="WorkOur col-12 col-sm-4 d-flex justify-content-center p-0">
            <p className="DividingLine">|</p>
              <PeopleAltIcon style={{ color: "white" }} />
              <p>
                Trabaje
                <br /> con nosotros
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="FooterDown">
        <div className="FooterDownContainer row col-md-11 col-lg-10 col-xl-8 mx-auto">
          <div className="NavLinksFooter nav-links col-12 col-md-8 col-lg-8 col-xl-6 p-0 mx-auto">
            <NavLink to="/" activeClassName="selectedLink">
              Inicio
            </NavLink>
            <NavLink to="/" activeClassName="selectedLink">
              Productos
            </NavLink>
            <NavLink to="/nosotros" activeClassName="selectedLink">
              Nosotros
            </NavLink>
            <NavLink to="/" activeClassName="selectedLink">
              Contacto
            </NavLink>
          </div>
          <span className="ReferencesFooter  col-md-11 col-lg-4 col-xl-6 p-0 d-flex justify-content-center mx-auto pt-sm-3 pt-md-0">
            Siguenos en
            <a href="https://www.facebook.com/negociemosdistribuidora/">
              <FacebookIcon style={{ color: "white" }} />
            </a>
            <a
              href={"https://www.instagram.com/distribuidoranegociemos/?hl=es"}
            >
              <InstagramIcon style={{ color: "white" }} />
            </a>
          </span>
        </div>
        <div className="FooterRigths row col-md-11 col-lg-10 col-xl-8 mx-auto ">
          <div className="col-md-11 col-lg-4 col-xl-5 d-flex justify-content-start">
            <p>
              @ 2021 Distribuidora Negociemos. Todos los derechos reservados.
            </p>
          </div> 
          <div className="col-md-11 col-lg-8 col-xl-7 d-flex justify-content-end">
            <a href="">| Políticas y téminos de uso</a>
            <a href="">| Políticas de tratmiento de datos</a>
            <a href="">| Garantias y devoluciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
