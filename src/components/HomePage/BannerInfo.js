import "../../Styles/HomePageStyle/BannerInfo.css"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {getProductBuyAction} from '../../redux/itemBuyDucks'
import { useDispatch } from "react-redux";
import useAuth from '../../Auth/useAuth';



const BannerInfo = ({item}) => {
    const dispatch = useDispatch()
    const auth = useAuth() 

    return (
        <div className="BannerInfo row ">
            <div className="DescriptionBanner col-sm-12 col-md-6 mx-auto">
                <h4>{item.DESCRIPCION}</h4>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,sino que tambien ingresó como texto de relleno en documentos electrónicos
                </p>
                {auth.tokenAuth ?
                <Link to={`/compraproducto/${item.ID_ITEM}`} style={{textDecoration:"none"}}>
                <Button variant="contained"  color="secondary" disableElevation  onClick={()=>{dispatch(getProductBuyAction(item))}}>
                comprar producto
                </Button>
                </Link>: null}
            </div>
            <div className="ImgBanner col-sm-12 col-md-6 mx-auto pb-4">
                {item.ID_CODBAR? <img src={`img/${item.ID_CODBAR}.jpg`} alt="img"></img>:<img src={"img/036600813719.jpg"} alt="404"></img>}
            </div>
        </div>
    );
};


export default BannerInfo;