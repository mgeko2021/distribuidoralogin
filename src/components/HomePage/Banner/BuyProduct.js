// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../Auth/useAuth';
import "../../../Styles/HomePageStyle/Banner/BuyProduct.css"
import Information from '../Information';
import NavigationBar from '../NavigationBar';
import DescriptionProduct from './BuyProduct/DescriptionProduct';
import img from "../../../components/img2.jpg";
import Footer from "../../Footer";

function BuyProduct() {


    return (
        <div className="BuyProduct col-12 p-0">
                <Information />
                <div
                    className="BannerImg2 "
                    style={{ backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:"center", padding:"0.4rem 0 5rem"}}
                >
                <NavigationBar className="NavBuyProduct"/>
                <div className='Description row col-sm-11 col-lg-8 col-xl-7 mx-auto p-0'>
                    <h2>Descripcion Producto</h2>
                 <p>Incio {`>`} Descripcion Producto</p>
                </div>
            </div>
            <DescriptionProduct/>
            <Footer/>
        </div>
    );
}

export default BuyProduct;

