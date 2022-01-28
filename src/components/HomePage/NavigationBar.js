import "../../Styles/HomePageStyle/NavigationBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
import { useState } from "react";
import useAuth from "../../Auth/useAuth";
import Button from "@material-ui/core/Button";
import PopUp from "./Information/PopUp";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-scroll";

import { StylesProvider } from "@material-ui/core";
import { useEffect } from "react";

const NavigationBar = () => {
  const counItem = useSelector((store) => store.countBuyProduct);

  const auth = useAuth();

  const counItemLocal = JSON.parse(window.localStorage.getItem("itemsBuy"));

  // const countTotal = counItemLocal.concat(counItem)

  // width:200%;
  // display: flex;
  // @media (max-width: 720px) {
  // width:400%;
  // }
  // @media (max-width: 576px) {
  // width:600%;
  // }
  // @media (max-width: 320px) {
  // width:1200%;
  // }
  const [isMObile, setIsMobile] = useState(false);

  return (
    <div className="NavigationBar row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
      <div className="Nav col-md-12  p-0">
        <div className="LogoNav col-3">
          <img src="logo.png"></img>
        </div>
        <div className="NavLinks nav-links col-12 col-sm-12 col-md-7 p-0">
          <NavLink to="/" activeClassName="selectedLink">
            Inicio
          </NavLink>
          <NavLink to="/productos" activeClassName="selectedLink">
            Productos
          </NavLink>
          <NavLink to="/nosotros" activeClassName="selectedLink">
            Nosotros
          </NavLink>
          <Link style={{cursor:"pointer"}}
            activeClass="active"
            to="ContacId"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacto
          </Link>
        </div>

        {isMObile ? (
          <div className="mobileLinks col-12 col-sm-12 col-md-7 p-0">
            <NavLink to="/" activeClassName="selectedLink">
              Inicio
            </NavLink>
            <NavLink to="/" activeClassName="selectedLink">
              Productos
            </NavLink>
            <NavLink to="/nosotros" activeClassName="selectedLink">
              Nosotros
            </NavLink>
            <Link to="/" activeClassName="selectedLink">
              Contacto
            </Link>
            {/* <div className="Loginbtn col-md-4 ">
                            <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} variant="contained" color="secondary">
                                Inciar Sesion
                            </Button>
                            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                <div className="popup-text"> 
                                    <h2>Acceso a Clientes</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non sit eveniet molestiae tenetur quam facilis quibusdam distinctio. Numquam dolorum placeat rem saepe commodi alias. Nihil labore incidunt impedit iste?</p>
                                    <h5>Correo Electronico</h5>
                                    <div className="popup-send">
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="correo"
                                        variant="outlined"
                                        />
                                        <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} variant="contained" color="secondary">
                                            Inciar Sesion
                                        </Button>
                                    </div>
                                </div>
                            </PopUp>
                        </div> */}
          </div>
        ) : null}
        {auth.tokenAuth ? (
          <a className="BuyCar col-2" href="/#/compras">
            <ShoppingCartIcon className="Car"></ShoppingCartIcon>
            <div className="SelectedProducts">
              <h3>{counItem.length != 0 ? counItem.length : 0}</h3>
              {/* <h3>{counItemLocal && counItem.length == 0? counItemLocal.length : null}</h3> */}
            </div>
          </a>
        ) : (
          <Link className="BuyCar col-2" to="/">
            <ShoppingCartIcon className="Car"></ShoppingCartIcon>
            <div className="SelectedProducts">
              <h3>{counItem.length != 0 ? counItem.length : 0}</h3>
              {/* <h3>{counItemLocal && counItem.length == 0? counItemLocal.length : null}</h3> */}
            </div>
          </Link>
        )}

        <MenuIcon
          onClick={() => {
            if (isMObile) {
              setIsMobile(false);
            } else {
              setIsMobile(true);
            }
          }}
          className="Responsive"
          size="medium"
        ></MenuIcon>
      </div>
    </div>
  );
};

export default NavigationBar;
