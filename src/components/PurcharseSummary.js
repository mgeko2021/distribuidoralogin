import React from 'react';
import Information from './HomePage/Information';
import NavigationBar from './HomePage/NavigationBar';
import ProductsBuy from './PurcharseSummary/ProductsBuy';
import "../Styles/PurchaseSummary.css"
import img from "./img2.jpg";
import Footer from './Footer';

const PurchaseSummary = () => {
    return (
        <div className="PurchaseSummary col-12 p-0">
            <Information/>
            <div
        className="BannerImg2 "
        style={{ backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:"center", padding:"0.4rem 0 5rem"}}
      >
                <NavigationBar/>
                <div className="RouteBuy row col-sm-11 col-lg-10 col-xl-8 mx-auto p-0">
                    <h2>Resumen de Compra</h2>
                    <p>Incio {`>`} Resumen de Compra</p>
                </div>
            </div>
            <ProductsBuy/>
            <Footer/>
        </div>
    );
};

export default PurchaseSummary;