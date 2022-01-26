import React from 'react';
import "../../../Styles/Products/ProductsList/ProductsListRender.css"
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Auth/useAuth';
import { getProductBuyAction } from '../../../redux/itemBuyDucks';

const ProductListRender = ({products, grid}) => {
    const dispatch = useDispatch()
    const auth = useAuth() 
    const location = useLocation()


    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    return (
        <div className="ProductsRender mx-auto mb-2" style={{width:`${grid}%`}}>
        {/* {laboratorie.ID_CODBAR? <img src={`img/${laboratorie.ID_CODBAR}.jpg`} alt="img"></img>:<img src={`404.png`} alt="404"></img>} */}
        {auth.tokenAuth?
        <Link 
        to={`/compraproducto/${products.ID_ITEM}`} style={{textDecoration:"none"}}
        onClick={()=>{dispatch(getProductBuyAction(products))}}
        >
        <img src={`img/${products.ID_CODBAR}.jpg`} alt="img"></img>
        </Link>:
        <div className="ProductDescriptionRender">
            <img src={`img/${products.ID_CODBAR}.jpg`} alt="img"></img>
            <h3>{products.DESCRIPCION}</h3>
            <p>{formatNumber(products.PRECIO_MIN_1)}</p>
        </div>
        }

        {/* <p style={{color:"black"}}>{laboratorie.DESCRIPCION}</p> */}
    </div>
    );
};

export default ProductListRender;