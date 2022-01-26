import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link , useLocation} from "react-router-dom";
import { getProductBuyAction } from "../../redux/itemBuyDucks";
import "../../Styles/Laboratorie/AutoComplete.css"
import useAuth from '../../Auth/useAuth';


const Autocomplete = ({ laboratorie }) => {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  const array = laboratorie.map(laboratorie => laboratorie.DESCRIPCION)
  const num = Math.floor(Math.random()*(laboratorie.length))

  const auth = useAuth()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = array.sort().filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    setSearchtext(value);
    setSuggest([]);
  };

  const renderfilter =  laboratorie.filter(laboratorie => laboratorie.DESCRIPCION == searchtext )

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>No found</p>;
    }

    return (
      <ul>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="AutoComplete col-10 col-sm-3 col-xl-2 mx-auto">
      <div className="searchcontainer">
        <input
          type="text"
          placeholder="Buscar.."
          className="search"
          value={searchtext}
          onChange={handleChange}/>
      </div>
      <div className="Results">
        {getSuggestions()}
      </div>
      <div className="RenderProduct">
      {auth.tokenAuth?          
        <Link 
          to={`/compraproducto/${laboratorie.ID_ITEM}`} style={{textDecoration:"none"}}
          onClick={()=>{dispatch(getProductBuyAction(renderfilter[0]))}}
          >
          {renderfilter.length > 0? 
          <div>
            <img src={`img/${renderfilter[0].ID_CODBAR}.jpg`} alt="img"></img>
            <h6>{renderfilter[0].DESCRIPCION}</h6>
          </div>:
           <img src={"search.png"} alt="img" style={{width:"100%"}}></img>
          }

        </Link>:
          <Link 
         to={`${location.pathname}`} style={{textDecoration:"none"}}
          onClick={()=>{dispatch(getProductBuyAction(renderfilter[0]))}}
          >
          {renderfilter.length > 0? 
          <div>
            <img src={`img/${renderfilter[0].ID_CODBAR}.jpg`} alt="img"></img>
            <h6>{renderfilter[0].DESCRIPCION}</h6>
          </div>:
          <img src={"search.png"} alt="img" style={{width:"100%"}}></img>
          }
        </Link>
      }
      </div>
    </div>
  );
};
export default Autocomplete;
