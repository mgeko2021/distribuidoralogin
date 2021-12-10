import "../../Styles/HomePageStyle/ExclusiveBrands.css"
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MemoryIcon from '@material-ui/icons/Memory';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import React from 'react';

import img1 from './imgexcl/img1.jpg';
import img2 from './imgexcl/img2.jpg';
import img3 from './imgexcl/img3.jpg';
import img4 from './imgexcl/img4.jpg';

const ExclusiveBrands = () => {
    return (
        <div className="ExclusiveBrands row col-12 col-md-12 mx-auto p-0"> 
        <h4>MARCAS EXCLUSIVAS</h4>
            <div className="ExclusiveBrandsImg row col-10 col-sm-10 col-md-12 col-lg-10 col-xl-8 mx-auto p-0">
                <article className="uno col-12 col-sm-6 col-md-3 p-0">
                    <a ><img src={img1} alt="5" /></a>
                    <AcUnitIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="dos col-12 col-sm-6 col-md-3 p-0">
                    <a ><img src={img2} alt="5" /></a>
                    <AllInclusiveIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="tres col-12 col-sm-6 col-md-3 p-0">
                    <a ><img src={img3} alt="5" /></a>
                    <MemoryIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="cuatro col-12 col-sm-6 col-md-3 p-0">
                    <a ><img src={img4} alt="5" /></a>
                    <TripOriginIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
            </div>

        </div>
    );
};

export default ExclusiveBrands;