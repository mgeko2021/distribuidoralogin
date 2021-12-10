import React, { useEffect, useState }  from 'react';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HouseIcon from '@material-ui/icons/House';
import BusinessIcon from '@material-ui/icons/Business';
import "../../Styles/PurchaseSummary/ProductsBuy.css"
import ItemBuy from './ProductsBuy/ItemBuy';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import postEmail from '../../services/postEmail';
import sendCorreo from '../../services/sendCorreo';
import { FormControl,RadioGroup, Radio, FormControlLabel} from '@material-ui/core';
import postPedido from '../../services/postPedido';

const ProductsBuy = () => {

    const { register, handleSubmit,reset } = useForm();

    let itemsBuy = useSelector(store=> store.countBuyProduct)

    if(!itemsBuy){
        itemsBuy = []
    }
    let sum = 0
    for (let i = 0; i < itemsBuy.length; i++) {
        const element = Number(itemsBuy[i].valor_unitario )*Number(itemsBuy[i].cantidad)
        sum = element + sum
        console.log(Number(itemsBuy[i].valor_unitario ))
        console.log(Number(itemsBuy[i].cantidad))
        console.log(element)
    }

    console.log(itemsBuy)

    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    const onSubmit = dataBuy => {

        let ObjectDataBuy = {
            "cliente_codigo": "1018421403",
            "cliente_sucursal": "00",
            "subtotal": sum,
            "valor_dcto": "0",
            "valor_iva": "0",
            "valor_total": sum,
            "email":dataBuy.email ,
            "movil": dataBuy.movil,
            "telefono": dataBuy.telefono,
            "contacto": dataBuy.contacto,
            "direccion":dataBuy.direccion,
            "lista_precio":"01",
            "lista_dcto":"10",
            "forma_pago_id":dataBuy.forma_pago_id,
            "ciudad_corres_id":"77076001",
            "ciudad_corres_desc":dataBuy.ciudad,
            "items": itemsBuy
        }
        let ObjectDataEmail = {
            "valor_total": sum,
            "to":dataBuy.email ,
            "contacto": dataBuy.contacto,
            "direccion":dataBuy.direccion,
            // "lista_precio":"01",
            // "lista_dcto":"10",
            "forma_pago_id":dataBuy.forma_pago_id,
            // "ciudad_corres_id":"77076001",
            "ciudad_corres_desc":dataBuy.ciudad,
            "items": itemsBuy
        }
            // reset()
        // console.log(ObjectDataBuy)

        if(itemsBuy.length > 0 ) {
            const postFunc = async () => {
                // const responsePedido = await postPedido(ObjectDataBuy)
                const responseEmail = await sendCorreo(ObjectDataEmail)
                console.log(responseEmail)
                if(responseEmail.status == 200 
                    // &&  responseEmailo.status == 200
                     ) {
                        console.log("su hizo peticion")
                    reset()    
                }
            }
            postFunc() 
        } else {
            console.log("no peticion")
        }
    }
     
    const renderItemsBuy = itemsBuy.map(itemBuy=> <ItemBuy key={itemsBuy.item_id} itemBuy={itemBuy} sum={sum}/>)

    return (
        <div className="ProductsBuy row col-sm-12  col-xl-9 mx-auto p-0">
            <div className='DescriptionPay d-md-flex col-10 col-sm-11 col-xl-12  mx-auto p-0'>
                <div className='DescriptionBuy col-12 col-sm-9 col-md-6 col-lg-6 mx-auto p-0'>
                    <h3>Detalles de la facturacion y despacho</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="DescriptionInfoBuy ">

                            <div className="SendAddress">
                                <h5>Distribuidora Negociemos</h5>
                                <p>Nit: 1234.567.89</p>
                                <p>Carrera 12# 2-56,piso 2</p>
                                <p>Telefono: 356 789</p>
                                <p>Cali, Valle del Cauca</p>
                            </div>

                            <div className="DeliveryAddress col-sm-12  p-0">
                                <h5>Domicilio de Entrega</h5>
                                <div className="Info col-md-12 p-0 mb-2">  
                                    <TextField className="col-md-12 p-0" id="filled-basic" {...register("contacto", {required: true})} label="Nombre" variant="filled" />
                                    {/* <TextField id="filled-basic" {...register("apellido", {required: true})} label="Apellido" variant="filled" /> */}
                                </div>
                                <div className="Info col-md-12 p-0 mb-2">
                                    <TextField className="col-md-12 p-0" id="filled-basic" {...register("email", {required: true})} label="Email" variant="filled" />
                                </div>
                                {/* <div className="InfoPLace">
                                    <TextField id="filled-basic" {...register("direccion", {required: true})} label="Dirección" variant="filled" />
                                </div> */}
                                <div className="InfoPlace row col-md-12 mx-auto p-0 mb-2 ">
                                    <TextField className="col-md-12 col-lg-5  mb-2" id="filled-basic" {...register("telefono", {required: true})} label="Telefono" variant="filled" />
                                    <TextField className="col-md-12 col-lg-6  mb-2" id="filled-basic" {...register("movil", {required: true})} label="Movil" variant="filled" />
                                </div>
                                <div className="InfoSend row col-md-12 mx-auto p-0 mb-2">
                                    <TextField className="col-md-12 col-lg-5  mb-2" id="filled-basic" {...register("direccion", {required: true})} label="Dirección" variant="filled" />
                                    <TextField className="col-md-12 col-lg-6  mb-2" id="filled-basic" {...register("ciudad", {required: true})} label="Ciudad" variant="filled" />
                                </div>
                            </div>
                            <div className="PayProducts">
                                <h5>Domicilio de Entrega</h5>
                                <FormControl >
                                <RadioGroup
                                  aria-label="gender"
                                //   defaultValue="female"
                                  name="radio-buttons-group"
                                >
                                <div className="Pay">
                                    <div className="PSE">
                                        <FormControlLabel
                                            control={
                                            <Radio
                                                color="primary"
                                            />
                                            }
                                            name="radio-buttons-group"
                                            value="1"
                                            label={<CreditCardIcon fontSize="large" color="primary"/> }
                                            {...register("forma_pago_id", {required: true})}
                                        />
                                        <p>Tarjeta de credito PSE</p>
                                    </div>
                                    <div className="UponDelivery">
                                        <FormControlLabel
                                            control={
                                            <Radio
                                                color="primary"
                                            />
                                            }
                                            name="radio-buttons-group"
                                            value="2"
                                            label={<HouseIcon fontSize="large" color="primary"/> }
                                            {...register("forma_pago_id", {required: true})}
                                        />
                                        <p>Pago contraentrega</p>
                                    </div>
                                    <div className="Bank">
                                        <FormControlLabel
                                            control={
                                            <Radio
                                                color="primary"
                                                />
                                            }
                                            name="radio-buttons-group"
                                            value="3"
                                            label={<BusinessIcon fontSize="large" color="primary"/> }
                                            {...register("forma_pago_id", {required: true})}
                                        />
                                        <p>Transferencia bancaria</p>
                                    </div>
                                </div> 
                                </RadioGroup>
                                </FormControl>    
                            </div>
                        </div>
                        <div className="PriceTotal">
                            <div className="Discount">
                                <h4>10% Descuento</h4>
                            </div>
                            <div className="InfoPriceTotal"> 
                                <h3>Total</h3>
                                <h3>{ formatNumber(sum)}</h3> 
                            </div>
                            <Button
                                type="submit"
                                className="Like"
                                variant="contained"
                                color="secondary"
                            > Procesar Pagos
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="ProductsInfoBuy col-12 col-sm-9 col-md-5 p-0 mx-auto mt-5 ">
                    {renderItemsBuy.length > 0?renderItemsBuy: 
                    <div className="EmptyCar">
                        <img src="carrito_vacio.png"></img>
                    </div>}
                </div>
            </div>
            
        </div>
    );
};

export default ProductsBuy;