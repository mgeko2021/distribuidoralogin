import React from 'react';
import { Link } from 'react-router-dom';
import { getProductBuyAction } from '../../../redux/itemBuyDucks';
import { useDispatch } from 'react-redux';
import useAuth from '../../../Auth/useAuth';

const SueggestionRenderDesktop = ({productSugesstions}) => {
    const dispatch = useDispatch()
    const auth = useAuth() 

    return (
        <div className="SuggestionsImg1 col-md-4 col-lg-3  mb-3">
            {auth.tokenAuth ?
                <Link 
                    to={`/compraproducto/${productSugesstions.ID_ITEM}`} style={{textDecoration:"none"}}
                    onClick={()=>{dispatch(getProductBuyAction(productSugesstions))}}
                    >
                    <img src={`img/${productSugesstions.ID_CODBAR}.jpg`}  alt="img"/>
                    <h5>{productSugesstions.DESCRIPCION}</h5>
                </Link>:
                    <div>
                        {productSugesstions.ID_CODBAR?<img src={`img/${productSugesstions.ID_CODBAR}.jpg`}  alt="img"></img>:
                        <img src={`404.png`} style={{width:`95%`}} alt="img"></img>}
                    </div>
            }
         </div>
    );
};

export default SueggestionRenderDesktop;