import "../../Styles/HomePageStyle/Services.css"
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PhoneIcon from '@material-ui/icons/Phone';
import PaymentIcon from '@material-ui/icons/Payment';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from 'react';

const Services = () => {
    
    return (
        <div className="Services row col-12 mx-auto">
            <div  className="ServicesImg row col-12 col-lg-8 col-xl-6 mx-auto p-0 ">
                <div className="ServicesImg3 col-10 col-sm-6 col-md-5 ">
                    <PaymentIcon style={{color: '#0096d2', fontSize: 40}}/>
                    <h6>Pagos seguros</h6>
                </div>
                <div className="ServicesImg4 col-10 col-sm-6 col-md-5">
                     <VerifiedUserIcon style={{color: '#0096d2', fontSize: 40}}/>
                     <h6>100% garantizado</h6>
                </div>
            </div>
        </div>
    );
};

export default Services;