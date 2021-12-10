import "../../../Styles/HomePageStyle/Information/PopUp.css"
import CloseIcon from '@material-ui/icons/Close';

const PopUp = (props) => {

    return (props.trigger) ? (
        <div className="PopUp">
                <div className="popup-inner">
                    <button className onClick={()=> props.setTrigger(false)} className="close-btn" ><CloseIcon/></button>
                    { props.children }
            </div>
        </div>
    ): null;
};

export default PopUp;