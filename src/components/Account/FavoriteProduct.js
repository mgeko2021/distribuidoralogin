import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import "../../Styles/Account/AccountRender/FavoriteProduct.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getCountDeleteFavoriteAction } from "../../redux/itemFavoriteDucks";

const FavoriteProduct = ({ itemFavorite }) => {
  
  const[favoriteItemLocal , setFavoriteItemLocal] = useState([])
  const dispatch = useDispatch();
  

  const deleteFavorite = (id) => {
    if(localStorage.getItem('favoritesProducts')){
      let favoritesProductsParse = JSON.parse(localStorage.getItem('favoritesProducts'))
      const deleteFavoriteItem = favoritesProductsParse.filter((favoriteItem) => {return favoriteItem.item_ext != id});
      localStorage.setItem('favoritesProducts', JSON.stringify(deleteFavoriteItem))
      dispatch(getCountDeleteFavoriteAction(deleteFavoriteItem))
      setFavoriteItemLocal(deleteFavoriteItem)
    }
  };

  function formatNumber(number) {
    return new Intl.NumberFormat("ES-MX", {
      style: "currency",
      currency: "COP",
    }).format(number);
  }

  console.log(itemFavorite);
  

  return (
    <div className="FavoriteProduct row col-11  mx-auto p-0 pb-1">
      <div className="ImgFavoriteCrud col-12 col-lg-5 mx-auto p-0 pb-2">
        {itemFavorite.item_ext ? (
          <img src={`img/${itemFavorite.item_ext}.jpg`} alt="img" natural></img>
        ) : (
          <img src={"img/036600813719.jpg"} alt="404"></img>
        )}
      </div>
      <div className="DescriptionFavoriteCrud col-6 col-lg-3 mx-auto p-0 pb-2">
        {itemFavorite.item_nombre ? <h5>{itemFavorite.item_nombre}</h5> : null}
        {itemFavorite.valor_unitario ? 
          <h4>{formatNumber(itemFavorite.valor_unitario)} </h4>
        : <h2>Hola</h2> }
       

        {/* <Link to={`/compraproducto/${itemBuy.ID_ITEM}`} style={{textDecoration:"none"}}>
            <Button variant="contained"  color="secondary" disableElevation  onClick={()=>{dispatch(getProductBuyAction(itemBuy))}}>
            comprar producto
            </Button>
            </Link> */}
      </div>
      <div className="PriceFavorite col-6 col-lg-3 mx-auto   p-0 pb-2">
      <FavoriteBorderIcon
          // disabled={!addCar}
          onClick={() => {
            deleteFavorite(itemFavorite.item_ext);
            // dispatch(getCountProductBuyAction(item.length != 0? item:itemLocal))
          }}
          type="number"
          className="Buy"
          variant="contained"
          size="medium"
          color="primary"
          style={{ fontSize: 40 }}
        >
          Eliminar
        </FavoriteBorderIcon>
        <p>Quitar <br/> Favorito</p>
      
      </div>
    </div>
  );
};

export default FavoriteProduct;
