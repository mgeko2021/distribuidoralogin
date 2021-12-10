import "../../Styles/HomePageStyle/Suggestions.css"
import React from 'react';

const Suggestions = () => {

    return (
        <div className="Suggestions col-md-9 col-lg-10 col-xl-7 mx-auto p-0">
            <h4>TE SUGERIMOS</h4>
            <div className="GridSuggestions row ">
                <div className="SuggestionsImg1 col-md-4 col-lg-3  mb-3">
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
                </div>
            </div>
        </div>
    );
};

export default Suggestions;