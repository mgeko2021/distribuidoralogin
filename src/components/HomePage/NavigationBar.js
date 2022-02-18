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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-scroll";

import { StylesProvider } from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import mailLogin from "../../services/mailLogin";

const NavigationBar = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dataForm, setDataForm] = useState();
  const { register, handleSubmit, reset } = useForm();
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

  const handleLogin = (data) => {
    setDataForm(data);
    reset();
  };

  useEffect(() => {
    if (dataForm) {
      const postFunc = async () => {
        // const token = await postToken()
        //     if(token.status == "200"){
        //         const postEmailFunc = async () => {
        //         const dataUser = await postEmail(token.data.token)
        //         if(dataUser.status == "200"){
        //             for (let i = 0; i < dataUser.data.length; i++) {
        //                 console.log(dataUser.data[i].EMAIL)
        //                 if (dataUser.data[i].EMAIL == dataForm.username) {
        const data = {
          // to: dataForm.username,
          to: "mcamacho@gekoestudio.com",
          // token: token.data.token
          token:
            "Bearer 1//049GqkZCJDZgECgYIARAAGAQSNwF-L9IrXuXALibPF_aZKt0FA9wtz74LgcDFvQ-_N_rNMwNyq48Byw6yw6QGf4IvhaOAr7gQcYs",
        };
        const postLoginFunc = async () => {
          const tokenLogin = await mailLogin(data);

          console.log(tokenLogin);
        };
        postLoginFunc();

        // setButtonPopUp(false)
        // auth.upToken(token.data.token || localStorage.getItem("token"))
        //         }
        //     }
        // }

        // setButtonPopUp(false)
        // auth.upToken(token.data.token || localStorage.getItem("token"))
        // }
        // postEmailFunc()
        // }
      };
      postFunc();
    }
  }, [dataForm]);

  //   useEffect(()=> {
  //     if(dataForm){
  //         if(dataForm.username == "distribuidora@negociemos.com"){
  //             const postFunc = async () => {
  //             const datauser = await postToken(dataForm)
  //                 if(datauser){
  //                 //   auth.login(datauser.name);
  //                     // console.log(datauser.data.token)
  //                     setButtonPopUp(false)
  //                     auth.upToken(datauser.data.token || localStorage.getItem("token"))
  //                 }
  //             }
  //                 postFunc()
  //         }
  //     }
  //   },[dataForm])

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
            <NavLink to="/productos" activeClassName="selectedLink">
              Productos
            </NavLink>
            <NavLink to="/nosotros" activeClassName="selectedLink">
              Nosotros
            </NavLink>
            {auth.tokenAuth ? (
          <NavLink  to="/compras">
            <ShoppingCartIcon className="Car"></ShoppingCartIcon> 
             Carrito
          </NavLink>
            ) : null
            }
            <Link style={{cursor:"pointer" }}
              activeClass="active"
              to="ContacId"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            Contacto
            </Link>
      
            <div className="LoginbtnMobil col-md-4 ">
            {auth.tokenAuth? 
               <NavLink to="/cuenta" style={{textDecoration:"none"}}> 
               <Button
                   className="Loginbtn"
                   variant="contained"
                   color="secondary"
                   style={{ backgroundColor:"rgb(0, 65, 176)",color:"white"}}
                 >
                   <AccountCircleIcon />
                   Cuenta
                 </Button>
                 </NavLink>:
                <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} 
                style={{ backgroundColor:"rgb(0, 65, 176)",color:"white"}} 
                variant="contained">
                    Incio Cuenta
                </Button>}

                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <div className="popup-text"> 
                        <h2>Acceso a Clientes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non sit eveniet molestiae tenetur quam facilis quibusdam distinctio. Numquam dolorum placeat rem saepe commodi alias. Nihil labore incidunt impedit iste?</p>
                        <h5>Correo Electronico</h5>
                        <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="popup-send">
                            <TextField
                            {...register("username", { required: true })}
                            id="outlined-required"
                            label="correo"
                            variant="outlined"
                            />
                          <button> <span>Iniciar Sesion</span> </button>
                      </div>
                      </form>
                    </div>
                </PopUp>
            </div>
          </div>
        ) : null}
        {auth.tokenAuth ? (
          <NavLink className="BuyCar col-2" to="/compras">
            <ShoppingCartIcon className="Car"></ShoppingCartIcon>
            <div className="SelectedProducts">
              <h3>{counItem.length != 0 ? counItem.length : 0}</h3>
              {/* <h3>{counItemLocal && counItem.length == 0? counItemLocal.length : null}</h3> */}
            </div>
          </NavLink>
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
