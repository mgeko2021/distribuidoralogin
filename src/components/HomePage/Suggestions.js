import "../../Styles/HomePageStyle/Suggestions.css"
import React, { useEffect, useState } from 'react';
import { Slide, Slideshow, TextoSlide } from "./SlideshowSugestions";
import SueggestionRender from "./Suggestion/SuggestionRender";
import { useSelector } from "react-redux";
import SueggestionRenderDesktop from "./Suggestion/SuggestionRenderDesktop";

const Suggestions = () => {
    const [is576px, set576px] = useState(false)

    useEffect(()=> {
        console.log(window.screen.width)
           
            if(window.screen.width <577  ){
                set576px(true)
            }
        },[])
      

    let productSugesstions = useSelector((store) => store.dataProducts.array)
    
    const currentSugesstions = productSugesstions.slice(0, 7);

    const suegestionsDesktopRender = currentSugesstions.map((productSugesstions, index) => (
        <SueggestionRenderDesktop key={index} productSugesstions={productSugesstions} />
      ));
    const suegestionsMobilRender = currentSugesstions.map((productSugesstions, index) => (
        <SueggestionRender key={index} productSugesstions={productSugesstions} />
      ));

    return (
        <div className="Suggestions col-md-9 col-lg-10 col-xl-7 mx-auto p-0">
            <h4>TE SUGERIMOS</h4>
            {!is576px? 
                <div className="GridSuggestions row ">
                {/* <div className="SuggestionsImg1 col-md-4 col-lg-3  mb-3">
                    <img src="img/8850769020106.jpg"></img>
                </div>
                <div className="SuggestionsImg2 col-md-4 col-lg-3 mb-3">
                    <img src="img/8850769020137.jpg"></img>
                </div>
                <div className="SuggestionsImg3 col-md-4 col-lg-3 mb-3">
                     <img src="img/7707019459067.jpg"></img>
                </div>
                <div className="SuggestionsImg4 col-md-4 col-lg-3 mb-3">
                     <img src="img/7794640171420.jpg"></img>
                </div>
                <div className="SuggestionsImg5 col-md-4 col-lg-3 mb-3">
                     <img src="img/7707397791049.jpg"></img>
                </div>
                <div className="SuggestionsImg6 col-md-4 col-lg-3 mb-3">
                     <img src="img/7707332986028.jpg"></img>
                </div>
                <div className="SuggestionsImg7 col-md-6 col-lg-3 mb-3">
                     <img src="img/7707035510650.jpg"></img>
                </div>
                <div className="SuggestionsImg8 col-md-6 col-lg-3 mb-3">
                      <img src="img/7707332986905.jpg"></img>
                </div> */}
                {suegestionsDesktopRender}
            </div>
            :
         
            <div className="SuggestionsMobile col-12 col-sm-5 p-0">
                <Slideshow className="Slideshow" controles={true} autoplay={true} velocidad="2000" intervalo="5000">
                    {suegestionsMobilRender}
                </Slideshow>
            </div>
            }
   
            {/* <div className="SuggestionsProof">
                <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                    <Slide>
                        <a href="https://www.falconmaters.com">
                            <img src="img/8850769020106.jpg" alt=""/>
                        </a>
                        <TextoSlide colorFondo="navy">
                            <p>15% descuento en productos Apple</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="https://www.falconmaters.com">
                            <img src="img/8850769020137.jpg" alt=""/>
                        </a>
                        <TextoSlide>
                            <p>15% descuento en productos Apple</p>
                        </TextoSlide>
                    </Slide>
                </Slideshow>
            </div> */}
        </div>
    );
};

export default Suggestions;