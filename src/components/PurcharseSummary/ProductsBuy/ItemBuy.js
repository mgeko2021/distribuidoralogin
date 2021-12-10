import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import "../../../Styles/PurchaseSummary/ProductsBuy/ItemBuy.css"
import { getCountDeleteProductBuyAction} from '../../../redux/itemsCarDucks';

const ItemBuy = ({itemBuy}) => {

    const dispatch = useDispatch()

    const counItem = useSelector(store=> store.countBuyProduct)

    window.localStorage.setItem("itemsBuy",JSON.stringify(counItem))
    

    const deleteItem = (id) => {
        const deleteCountItem = counItem.filter(counItem=> {return counItem.item_ext != id})
        dispatch(getCountDeleteProductBuyAction(deleteCountItem))
    }

    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    console.log(counItem)

    return (
        <div className="ItemBuy row col-11 col-sm-12 mx-auto p-0 pb-1">
            <div className="ImgBuyCrud col-12 col-lg-6 mx-auto p-0 pb-2">
            {itemBuy.item_ext? <img src={`img/${itemBuy.item_ext}.jpg`} alt="img" natural></img>:<img src={"img/036600813719.jpg"} alt="404"></img>}
            </div>
            <div className="DescriptionBuyCrud col-6 col-lg-3 mx-auto p-0 pb-2">
            { itemBuy.item_nombre ? <h5>{itemBuy.item_nombre}</h5>:null}
            {itemBuy.valor_unitario? <p>Cantidad: {itemBuy.cantidad}</p>:null}
            <Button 
                // disabled={!addCar}
                onClick={()=>{ deleteItem(itemBuy.item_ext)
                    // dispatch(getCountProductBuyAction(item.length != 0? item:itemLocal))
                }}
                type="number" className="Buy" variant="contained" size="medium" color="secondary"
            >Eliminar</Button>
            
                {/* <Link to={`/compraproducto/${itemBuy.ID_ITEM}`} style={{textDecoration:"none"}}>
                <Button variant="contained"  color="secondary" disableElevation  onClick={()=>{dispatch(getProductBuyAction(itemBuy))}}>
                comprar producto
                </Button>
                </Link> */}
            </div>
            <div className="Price col-6 col-lg-3 mx-auto p-0 pb-2">
                {itemBuy.valor_unitario? <h4>{formatNumber(itemBuy.valor_unitario)} </h4>:null}
            </div>
            
        </div>
    );
};

export default ItemBuy;