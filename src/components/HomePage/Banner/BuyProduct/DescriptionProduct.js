import React, { useState } from 'react';
import "../../../../Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
// Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getCountProductBuyAction } from '../../../../redux/itemsCarDucks';
import { useForm } from "react-hook-form";
import { getProductFavorite, getCountDeleteFavoriteAction } from '../../../../redux/itemFavoriteDucks';
import { useEffect } from 'react';


const DescriptionProduct = () => {
    const { register, handleSubmit } = useForm();
    const [redHearthLike, setRedHearthLike] = useState()

    const itemFavorite = useSelector(store => store.favoritesProducts)
    const counItem = useSelector(store => store.countBuyProduct)
    const item = useSelector(store => store.buyProduct.array)

    console.log(item)
    console.log(itemFavorite)




    useEffect(() => {

        const boolFavorite = itemFavorite.find(itemFavorite => itemFavorite.item_id === item.ID_ITEM)
        if (boolFavorite) {
            setRedHearthLike("red")
        } else {
            setRedHearthLike("gray")
        }


    }, [])

    // const hearthFavorite = 

    const dispatch = useDispatch()



    const itemLocal = JSON.parse(window.localStorage.getItem("item"))

    if (counItem.length != 0) {
        window.localStorage.setItem("itemsBuy", JSON.stringify(counItem))
    }

    if (item.length != 0) {
        window.localStorage.setItem("item", JSON.stringify(item))
    }


    const onSubmit = data => {

        const productProperties = {
            item_id: item.ID_ITEM,
            item_ext: item.ID_CODBAR,
            item_nombre: item.DESCRIPCION,
            item_referencia: item.ID_REFERENCIA,
            cantidad: data.AMOUNT,
            valor_unitario: item.PRECIO_MIN_1,
            porc_dcto: item.PORC_DES1,
            valor_dcto: "0",
            porc_dcto_extra: "0",
            valor_dcto_extra: "0",
            subtotal: item.PRECIO_MIN_1 * data.AMOUNT,
            valor_total: item.PRECIO_MIN_1 * data.AMOUNT

        }
        dispatch(getCountProductBuyAction(productProperties))
    };

    const onFavorite = (event) => {
        if (event.currentTarget.style.backgroundColor == "gray") {
            event.currentTarget.style.backgroundColor = "red"

            const productProperties = {
                item_id: item.ID_ITEM,
                item_ext: item.ID_CODBAR,
                item_nombre: item.DESCRIPCION,
                item_referencia: item.ID_REFERENCIA,
                valor_unitario: item.PRECIO_MIN_1,
                porc_dcto: item.PORC_DES1,
            }
            // console.log(productProperties)
            dispatch(getProductFavorite(productProperties))
        } else {
            event.currentTarget.style.backgroundColor = "gray"
            const deleteFavoriteItem = itemFavorite.filter(itemFavorite => { return itemFavorite.item_id != item.ID_ITEM })
            dispatch(getCountDeleteFavoriteAction(deleteFavoriteItem))
        }



    };



    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX", {
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    return (
        <div className="DescriptionProduct row col-sm-11 col-lg-8 col-xl-7 mx-auto p-0">

            <div className="InfoBuyProduct row  col-sm-12 p-0">
                <div className="ImgBuyProduct col-10  col-sm-5 mx-auto">
                    {item.ID_CODBAR ? <img className="mx-auto p-0" src={`img/${item.ID_CODBAR}.jpg`} alt="img"></img> : <img className="mx-auto p-0" src={"img/036600813719.jpg"} alt="404"></img>}
                </div>
                <div className="PicreAndDescription col-10  col-sm-7 mx-auto">
                    <p>{item.length != 0 ? item.CMLINEAS_DESCRIPCION : itemLocal.CMLINEAS_DESCRIPCION}</p>
                    <h3>{item.length != 0 ? item.DESCRIPCION : itemLocal.DESCRIPCION}</h3>
                    <div className="Prices">
                        <div className="NoTachado">
                            <h3 >{formatNumber(item.length != 0 ? item.PRECIO_MIN_1 : itemLocal.PRECIO_MIN_1)}</h3>
                            <p>Ahora</p>
                        </div>
                        {/* {item.length != 0 && item.ULTIMO_COSTO_ED < item.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(item.length != 0?(item.PRECIO_MIN_1)*1.1:(itemLocal.PRECIO_MIN_1)*1.1)}</h5>:
                         null
                        }
                        {item.length == 0 && itemLocal.ULTIMO_COSTO_ED < itemLocal.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(itemLocal.length != 0?itemLocal.PRECIO_MIN_1:itemLocal.PRECIO_MIN_1)}</h5>:
                         null
                        } */}
                    </div>
                    <p>
                        {item.DESC_ITEM_PADRE}
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="Amount">
                            <label >Cantidad <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                {...register("AMOUNT", {
                                    required: true,
                                    pattern: /^\+?[1-9]\d*$/
                                })}
                            />
                            </label>
                        </div>
                        <div className="AddToCar">
                            <Button
                                // disabled={!addCar}
                                // onClick={()=>{
                                //     // dispatch(getCountProductBuyAction(item.length != 0? item:itemLocal))
                                // }}
                                type="number" className="Buy" variant="contained" size="medium" color="primary" startIcon={<ShoppingCartIcon />}
                            >Añadir al carrito</Button>
                            <Button
                                className="Like" style={{ backgroundColor: `${redHearthLike}` }} onClick={
                                    (event) => {
                                        console.log("hola")
                                        onFavorite(event)


                                    }}
                                variant="contained"
                                color="default"
                                startIcon={<FavoriteBorderIcon />}
                            >
                            </Button>
                        </div>
                    </form>
                    <div className="RedInfo">
                        <p> Ref:        {item.length != 0 ? item.ID_REFERENCIA : itemLocal.ID_REFERENCIA}</p>
                        <p> Categoria:  Antiesaminico (Fijo)  </p>
                        <p> Etiqietas:  Medicameneto Pastilla (Fijo)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default DescriptionProduct;