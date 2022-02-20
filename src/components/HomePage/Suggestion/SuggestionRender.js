import React from 'react';
import { Slide, TextoSlide } from "../SlideshowSugestions";
import { Link, useLocation } from 'react-router-dom';
import { getProductBuyAction } from '../../../redux/itemBuyDucks';
import { useDispatch } from 'react-redux';
import useAuth from '../../../Auth/useAuth';

const SueggestionRender = ({productSugesstions}) => {
    const dispatch = useDispatch()
    const auth = useAuth() 
    const location = useLocation()

    return (
        <Slide className='SlideRender'>
            {auth.tokenAuth ?
            
            <Link 
                to={`/compraproducto/${productSugesstions.ID_ITEM}`} style={{textDecoration:"none"}}
                onClick={()=>{dispatch(getProductBuyAction(productSugesstions))}}
                >
                {productSugesstions.ID_CODBAR?<img src={`img/${productSugesstions.ID_CODBAR}.jpg`}  alt="img"></img>:
                <img src={`404.png`} style={{width:`95%`}} alt="img"></img>}
                <TextoSlide colorFondo="navy">
                    <p>{productSugesstions.DESCRIPCION}</p>
                </TextoSlide>
            </Link>
           :
           <div>
                {productSugesstions.ID_CODBAR?<img src={`img/${productSugesstions.ID_CODBAR}.jpg`}  alt="img"></img>:
                <img src={`404.png`} style={{width:`95%`}} alt="img"></img>}
                <TextoSlide colorFondo="navy">
                    <p>{productSugesstions.DESCRIPCION}</p>
                </TextoSlide>
            </div>
            }
        </Slide>
    );
};

export default SueggestionRender;