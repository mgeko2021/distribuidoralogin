import React from "react";
import "../Styles/Account.css";
import Information from "./HomePage/Information";
import NavigationBar from "./HomePage/NavigationBar";
import img from "./bg-main.jpg";
import AccountRender from "./Account/AccountRender";
import Footer from "./Footer";

const Account = () => {
  return (
    <div className="Account">
      <Information />
      <div
        className="BannerImg  pt-3 pb-3"
        style={{ backgroundImage: `url(${img})` }}
      >
        <NavigationBar />
        <div className="NosotrosRoute row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
          <h2>Favoritos</h2>
          <p>Inicio {`>`} Mi cuenta</p>
        </div>
      </div>
      <AccountRender />
      <Footer/>
    </div>
  );
};

export default Account;
