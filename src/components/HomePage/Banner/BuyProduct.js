// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../Auth/useAuth';
import "../../../Styles/HomePageStyle/Banner/BuyProduct.css"
import Information from '../Information';
import NavigationBar from '../NavigationBar';
import DescriptionProduct from './BuyProduct/DescriptionProduct';
import img from "./bg-main.jpg"

function BuyProduct() {


    return (
        <div className="BuyProduct col-12 p-0">
                <Information />
            <div className="BannerImg pt-3 pb-2 mb-5" style={{backgroundImage:`url(${img})`}}>
                <NavigationBar className="NavBuyProduct"/>
                <div className='Description row col-sm-11 col-lg-8 col-xl-7 mx-auto p-0'>
                    <h2>Nuestros Productos</h2>
                 <p>Incio {`>`} Nuestros productos</p>
                </div>
            </div>
            <DescriptionProduct/>
        </div>
    );
}

export default BuyProduct;

