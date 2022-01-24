/* eslint-disable */
import Banner from './HomePage/Banner';
import ExclusiveBrands from './HomePage/ExclusiveBrands';
import Information from './HomePage/Information';
import Laboratories from './HomePage/Laboratories';
import NavigationBar from './HomePage/NavigationBar';
import Services from './HomePage/Services';
import Suggestions from './HomePage/Suggestions';
import Telefares from './HomePage/Telefares';
import  '../Styles/HomePage.css';
import RedFixed from './RedFixed';
import img from "./bg-main.jpg"
import Footer from './Footer';

const HomePage = () => {
    // className="BannerImg" style={{backgroundImage:`url(${img})`}}
    return (
        <div className="HomePage col-12 p-0">
            <Information/>
            <div className="BannerImg pt-3 pb-3" style={{backgroundImage:`url(${img})`}}>
            <NavigationBar/>
            {/* <RedFixed/> */}
            <Banner/>
            </div>

            {/* <Telefares/> */}
            <Suggestions/>
            <Services/>
            <Laboratories/>
            <ExclusiveBrands/>
            <Footer/>
        </div>
    );
};

export default HomePage;