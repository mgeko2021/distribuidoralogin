import "../../Styles/Laboratorie/ProductsLab.css"
import { Link , useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import {getProductBuyAction} from '../../redux/itemBuyDucks'
import useAuth from '../../Auth/useAuth';



const ProductsLab = ({laboratorie, imageWidth}) => {
    const dispatch = useDispatch()
    const auth = useAuth() 
    const location = useLocation()

    console.log(laboratorie)

    return ( 
        <div className="ProductsLab mx-auto mb-2" style={{width:`${imageWidth}%`}}>
            {/* {laboratorie.ID_CODBAR? <img src={`img/${laboratorie.ID_CODBAR}.jpg`} alt="img"></img>:<img src={`404.png`} alt="404"></img>} */}
            {auth.tokenAuth?
            <Link 
            to={`/compraproducto/${laboratorie.ID_ITEM}`} style={{textDecoration:"none"}}
            onClick={()=>{dispatch(getProductBuyAction(laboratorie))}}
            >
            {laboratorie.ID_CODBAR? 
            <img src={`img/${laboratorie.ID_CODBAR}.jpg`} style={{width:"95%"}} alt="img"></img>:
            <img src={"img/036600813719.jpg"} alt="404" style={{width:"95%"}}></img>}
            </Link>:
            <Link to={`${location.pathname}`} style={{textDecoration:"none"}}>
                 {laboratorie.ID_CODBAR? 
            <img src={`img/${laboratorie.ID_CODBAR}.jpg`} style={{width:"95%"}} alt="img"></img>:
            <img src={"img/036600813719.jpg"} style={{width:"95%"}} alt="404"></img>}
            </Link>

            }

            {/* <p style={{color:"black"}}>{laboratorie.DESCRIPCION}</p> */}
        </div>
    );
}
 
export default ProductsLab;