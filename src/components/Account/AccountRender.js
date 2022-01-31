import React, { useEffect } from "react";
import "../../Styles/Account/AccountRender.css";
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AccountRender = () => {
    const [favoritesProducts, setFavoritesProducts] = useState([])

    // const item = useSelector((store)=>store.favoritesProducts)
    useEffect(()=>{
        
    },[])
    // listRenderFavorite

  return (
    <div className="AccountRender row  col-sm-12   col-xl-7 mx-auto mt-5 mb-5 p-0">
      <div className="AccountRenderFlex d-lg-flex col-12 col-sm-11 col-md-11  col-xl-12  mx-auto p-0">
        <div className="InformatioAccount col-12 col-sm-9 col-md-9 col-lg-4 mx-auto p-0'">
            <h3>Mi cuenta</h3>
               <p><PersonIcon style={{ color: "#36a8ff" }} /> Mis datos</p> 
               <p><FavoriteIcon style={{ color: "#36a8ff" }} /> Favoritos</p> 
               <p><ExitToAppIcon style={{ color: "#36a8ff" }} /> Cerra sesión</p> 
        </div>
        <div className="ProductsRenderList col-11 col-sm-9 col-md-8 col-lg-8 p-0 mx-auto mt-0 ">
          <div className="ListRenderProduct">
            {/* {listRenderFavorite} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRender;
