import React from 'react';
import Information from './HomePage/Information';
import NavigationBar from './HomePage/NavigationBar';
import ProductsBuy from './PurcharseSummary/ProductsBuy';
import "../Styles/PurchaseSummary.css"
import img from "./bg-main.jpg"

const PurchaseSummary = () => {
    return (
        <div className="PurchaseSummary col-12 p-0">
            <Information/>
            <div className="BannerImg pt-3 pb-2 mb-5" style={{backgroundImage:`url(${img})`}}>
                <NavigationBar/>
                <div className="RouteBuy row col-sm-11 col-lg-10 col-xl-8 mx-auto p-0">
                    <h2>Resumen de Compra</h2>
                    <p>Incio {`>`} Resumen de Compra</p>
                </div>
            </div>
            <ProductsBuy/>
        </div>
    );
};

export default PurchaseSummary;