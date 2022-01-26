import React, { useState } from "react";
import "../Styles/Products.css";
import Footer from "./Footer";
import Information from "./HomePage/Information";
import NavigationBar from "./HomePage/NavigationBar";
import img from "./bg-main.jpg";
import ProductslList from "./Products/ProductslList";

function Products() {
  return (
    <div className="Products col-12 p-0">
      <Information />
      <div
        className="BannerImg pt-3 pb-3"
        style={{ backgroundImage: `url(${img})` }}
      >
        <NavigationBar />
        <div className="NosotrosRoute row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
          <h2>Nuestros productos</h2>
          <p>Inicio {`>`} Nuestros productos</p>
        </div>
      </div>
      <ProductslList/> 
      <Footer/>
    </div>
  );
}

export default Products;
