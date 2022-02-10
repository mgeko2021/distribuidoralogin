import React, { useEffect } from "react";
import "../../Styles/Account/AccountRender.css";
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteProduct from "./FavoriteProduct";
import useAuth from "../../Auth/useAuth";
import Swal from "sweetalert2";

const AccountRender = () => {
    const [favoritesProducts, setFavoritesProducts] = useState([])

    const item = useSelector((store)=>store.favoritesProducts)
    
    console.log(item)

    useEffect(()=>{
      localStorage.setItem('favoritesProducts', JSON.stringify(item))
      let favoritesProductsParse = JSON.parse(localStorage.getItem('favoritesProducts'))
      setFavoritesProducts(favoritesProductsParse)

    },[item])


    const auth = useAuth();

    const logOut =()=>{
      auth.upToken(false);
      Swal.fire({
        title: "Cerrado sesion ",
        icon: "success",
        text: "Gracias por visitar Distribuidora Negociemos",
        confirmButtonText: "Aceptar",
      });
    }



    const renderFavoriteItems = favoritesProducts.map(favoritesProduct => <FavoriteProduct key={favoritesProduct.item_id} itemFavorite={favoritesProduct}/>)

  return (
    <div className="AccountRender row  col-sm-12   col-xl-7 mx-auto mt-5 mb-5 p-0">
      <div className="AccountRenderFlex d-lg-flex col-12 col-sm-11 col-md-11  col-xl-12  mx-auto p-0">
        <div  className="InformatioAccount col-11 col-sm-9 col-md-9 col-lg-4 mx-auto p-0'">
            <h3>Mi cuenta</h3>
               <p style={{cursor:"pointer"}}><PersonIcon style={{ color: "#36a8ff" }} /> Mis datos</p> 
               <p style={{cursor:"pointer"}}><FavoriteIcon style={{ color: "#36a8ff" }} /> Favoritos</p> 
               <p style={{cursor:"pointer"}} onClick={() => logOut()}><ExitToAppIcon 
                 
               style={{ color: "#36a8ff"
                }} /> Cerra sesión</p> 
        </div>
        <div className="ProductsRenderList col-11 col-sm-9 col-md-8 col-lg-8 p-0 mx-auto mt-0 ">
          <div className="ListRenderProduct">
            <div className="ListRenderProduct__titule col-11 mx-auto ">
              <h3>Productos Favoritos</h3>
            </div>
            {renderFavoriteItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRender;
