import { useState } from "react";
import "../../Styles/Products/ProductsList.css";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Checkbox from '@material-ui/core/Checkbox';
import CreditCardIcon from "@material-ui/icons/CreditCard";
import HouseIcon from "@material-ui/icons/House";
import BusinessIcon from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import postEmail from "../../services/postEmail";
import sendCorreo from "../../services/sendCorreo";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import postPedido from "../../services/postPedido";
import ProductListRender from "./ProductsList/ProductsListRender";
import { useEffect } from "react";
import CategoriesRender from "./ProductsList/CategoriesRender";
import LaboratoryRender from "./ProductsList/LaboratoryRender";
import useAuth from "../../Auth/useAuth";
import { Link } from "react-router-dom";
import { getProductBuyAction } from "../../redux/itemBuyDucks";
// import CategoriesRender from "./ProductsList/categoriesRender";

function ProductslList({ infoBanner }) {
  const { register, handleSubmit, reset } = useForm();

  const [nameCheckBox, useNameCheckBox] = useState("bayer");
  const [value, setValue] = useState([0, 10000]);
  const [maxValue, setMaxValue] = useState(9000);
  const [minValue, setMinValue] = useState(0);
  const [grid, setGrid] = useState(100 / 4);
  const [categoriesRender, setCategoriesRender] = useState([]);
  const [laboratory, setLaboratory] = useState([]);
  const [order, setOrder] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [flag, setFlag] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const [pageNumberLimit, setPageNumberLimit] = useState(9);
  const [maxpageNumberLimit, setmaxpageNumberLimit] = useState(9);
  const [minpageNumberLimit, setminpageNumberLimit] = useState(0);
  const [renderProducts, setRenderProducts] = useState(
    useSelector((store) => store.dataProducts.array)
  );
  const [offerProducts, setOfferProducts] = useState(
    useSelector((store) => store.dataProducts.array)
  );

  const auth = useAuth()
  const dispatch = useDispatch()


  // let renderProducts = useSelector((store) => store.dataProducts.array);

  useEffect(() => {

    const randomNumberConst = Math.floor(
      Math.random() * (renderProducts.length - 1)
    );
    setRandomNumber(randomNumberConst);
    localStorage.setItem("datos", JSON.stringify(renderProducts));
    const categories = [];
    const laboratory = [];
    if (renderProducts.length > 0) {
      for (let i = 0; i < renderProducts.length; i++) {
        if (renderProducts[i].CMLINEAS_DESCRIPCION) {
          categories.push(renderProducts[i].CMLINEAS_DESCRIPCION.toUpperCase());
          laboratory.push(renderProducts[i].CMCRICLA_DESCRIPCION.toUpperCase());
        }
      }
    }

    var maxAndMin = renderProducts.slice(0);
    maxAndMin.sort(function (a, b) {
      return a.PRECIO_MIN_1 - b.PRECIO_MIN_1;
    });
    const maximoValor = Number(maxAndMin[maxAndMin.length - 1].PRECIO_MIN_1);
    const minimoValor = Number(maxAndMin[0].PRECIO_MIN_1);
    setMaxValue(maximoValor);
    setMinValue(minimoValor);
    setValue([minimoValor, maximoValor]);

    const unique = categories.filter((valor, indice) => {
      return categories.indexOf(valor) === indice;
    });

    const uniqueLaboratory = laboratory.filter((valor, indice) => {
      return laboratory.indexOf(valor) === indice;
    });
    if (unique.length > 0) {
      setCategoriesRender(unique);
    }
    if (uniqueLaboratory.length > 0) {
      setLaboratory(uniqueLaboratory);
    }



  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = renderProducts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(laboratory);
  const listLaboratoryRender = laboratory.map((laboratory, index) => (
    <LaboratoryRender key={index} laboratory={laboratory} />
  ));
  const listCategoriesRender = categoriesRender.map((categoria, index) => (
    <CategoriesRender key={index} categoria={categoria} />
  ));
  const listRenderLaboratorie = currentPosts.map((products, index) => (
    <ProductListRender key={index} products={products} grid={grid} />
  ));

  const handleChange = (event, newValue) => {

    var datos = JSON.parse(localStorage.getItem("datos"));
    setRenderProducts(datos);
    setValue(newValue);
    const rangePrice = renderProducts.filter((price) => {
      if(price.PRECIO_MIN_1){
        return price.PRECIO_MIN_1 >= value[0] && price.PRECIO_MIN_1 <= value[1];
      }
    });

    console.log(datos)
    console.log(rangePrice)

    setTimeout(() => {
      setRenderProducts(rangePrice);
    }, 500);
  };


  const handleChangeSelct = () => {
    // setValue(newValue);
  };

  const sortNumbersLower = () => {
    var byLowerPrice = renderProducts.slice(0);
    byLowerPrice.sort(function (a, b) {
      return a.PRECIO_MIN_1 - b.PRECIO_MIN_1;
    });

    setRenderProducts(byLowerPrice);
    let arrays = [];
    for (let i = 0; i < byLowerPrice.length; i++) {
      arrays.push(byLowerPrice[i].PRECIO_MIN_1);
    }
  };
  const sortNumbersUpper = () => {
    var byLowerPrice = renderProducts.slice(0);
    byLowerPrice.sort(function (a, b) {
      return b.PRECIO_MIN_1 - a.PRECIO_MIN_1;
    });

    setRenderProducts(byLowerPrice);
    let arrays = [];
    for (let i = 0; i < byLowerPrice.length; i++) {
      arrays.push(byLowerPrice[i].PRECIO_MIN_1);
    }
  };

  function formatNumber(number) {
    return new Intl.NumberFormat("ES-MX", {
      style: "currency",
      currency: "COP",
    }).format(number);
  }



  //////////////////
  // colocar el numero de navegador


  const pageNumbers = []
    for(let i = 1; i <= Math.ceil(renderProducts.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const handeclick = (event)=> {
        setCurrentPage(Number(event.target.id));
      }

    const renderPageNumbers = pageNumbers.map(number => {
      if(number < maxpageNumberLimit+1 && number > minpageNumberLimit){
        return (
        <li key={number} id={number}
            onClick={handeclick}
            className={currentPage == number ? "active" :null}
            >
            {number}
          </li>
        )
      }
    })

    const handleNextbtn  = ()=> {
      setCurrentPage(currentPage +1)

      if(currentPage+1> maxpageNumberLimit){
        setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit)
        setminpageNumberLimit(minpageNumberLimit + pageNumberLimit)
      }
    }

    const handlePrevbtn  = ()=> {
      setCurrentPage(currentPage -1)

      if((currentPage-1)% pageNumberLimit==0){
        setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit)
        setminpageNumberLimit(minpageNumberLimit - pageNumberLimit)
      }
    }

    let pageIncrementBtn = null;
    if(pageNumbers.length > maxpageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip;</li>
    }

    let pageDrecrementBtn = null;
    if(minpageNumberLimit>=1) {
      pageDrecrementBtn = <li onClick={handlePrevbtn}> &hellip;</li>
    }


    const [searchtext, setSearchtext] = useState("");


    const handleChangeSearch = (e)=>{
      var datos = JSON.parse(localStorage.getItem("datos"));
      setRenderProducts(datos)

      let searchVal = e.target.value
      let suggestion = [];
      if (searchVal.length > 0) {
        suggestion = datos.filter((e) => e.DESCRIPCION.toLowerCase().includes(searchVal.toLowerCase()));
        // setResfound(suggestion.length !== 0 ? true : false);
      }
      if(suggestion.length > 0){
        setTimeout(() => {
        setRenderProducts(suggestion)
      }, 500);
      }
    
      // setRenderProducts(rangePrice);

    }

  return (
    <div className="ProductsList row col-sm-12  col-xl-9 mx-auto mt-5 mb-5 p-0">
      <div className="ProductListFlex d-md-flex col-10 col-sm-11 col-xl-12  mx-auto p-0">
        <div className="FilterProduct col-12 col-sm-9 col-md-6 col-lg-3 mx-auto p-0'">
          <div className="SearchProduct ">
            <Paper style={{ backgroundColor: "#ECECEC" }}>
              <InputBase
              onChange={handleChangeSearch}
                placeholder="Buscar"
                style={{ paddingLeft: "1.5rem", width: "80%" }}
              />
              <IconButton
                style={{ width: "20%" }}
                // type="submit"
                aria-label="search"
              >
                <SearchIcon style={{ color: "#36a8ff" }} />
              </IconButton>
            </Paper>
          </div>
          <div className="FilterProductBox ">
            <div className="CategoriesProducts">
              <h3>Categorias</h3>
              <div className="Categories">
                {listCategoriesRender}
              </div>
            </div>
            {auth.tokenAuth ?
                        <div className="PriceRange">
                        <h3>Rango de precios</h3>
                        <Slider
                          style={{ width: "90%" }}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          min={minValue}
                          step={1}
                          max={maxValue}
                        />
                        <p>
                          Rango: {value[0]}$ - {value[1]}${" "}
                        </p>
                      </div>: null
          
            }
            {offerProducts[randomNumber].ID_CODBAR ? (
              <Link 
              to={`/compraproducto/${offerProducts[randomNumber].ID_ITEM}`} style={{textDecoration:"none"}}
              onClick={()=>{dispatch(getProductBuyAction(offerProducts[randomNumber]))}}
      >
              <div className="OffersProducts">
                <h3>Ofertas</h3>
                <img
                  src={`img/${offerProducts[randomNumber].ID_CODBAR}.jpg`}
                  alt="img"
                  style={{ width: "100%" }}
                />
                    <h3>{offerProducts[randomNumber].DESCRIPCION}</h3>
                    {auth.tokenAuth ?
                      <p style={{ color: "green" }}>
                      {formatNumber(offerProducts[randomNumber].PRECIO_MIN_1)}
                    </p> :null
                    }
              
              </div>
              </Link>
            ) : (
              <div className="OffersProducts">
                <h3>Ofertas</h3>
              </div>
            )}
            <div>
              <h3>Filtrar por tipo de laboratorios</h3>
              <FormControl variant="filled" style={{ width: "100%" }}>
                <InputLabel htmlFor="filled-age-native-simple">
                  Laboratorio
                </InputLabel>
                <Select
                  native
                  value={null}
                  onChange={handleChangeSelct}
                  inputProps={{
                    name: "Laboratorio",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {listLaboratoryRender}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="ProductsRenderList col-12 col-sm-9 col-md-5 col-lg-8 p-0 mx-auto mt-0 ">
          <div className="ProductsGrid">
            <div className="IconsProductsGrid">
              <ViewModuleIcon
                style={{ color: "#36a8ff" }}
                onClick={() => {
                  setPostsPerPage(6);
                  setGrid(100 / 3);
                }}
              />
              <AppsIcon
                style={{ color: "#36a8ff" }}
                onClick={() => {
                  setPostsPerPage(9);
                  setGrid(100 / 3);
                }}
              />
              <ViewComfyIcon
                style={{ color: "#36a8ff" }}
                onClick={() => {
                  setPostsPerPage(12);
                  setGrid(100 / 4);
                }}
              />
            </div>
            <div className="CountProductsGrid">
              <p className="m-0">
                Encontrado {renderProducts.length ? renderProducts.length : 0}{" "}
                productos
              </p>
            </div>
            <div className="OrderRenderProduct">
              <p className="m-0">
                <ViewHeadlineIcon /> Ordenar por{" "}
                <KeyboardArrowDownIcon
                  onClick={() => {
                    setOrder(!order);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {order ? (
                  <div className="OrderProducts">
                    <button
                      onClick={() => {
                        setOrder(!order);
                        sortNumbersUpper();
                      }}
                    >
                      Mayor a menor
                    </button>
                    <button
                      onClick={() => {
                        setOrder(!order);
                        sortNumbersLower();
                      }}
                    >
                      Menor a mayor
                    </button>{" "}
                  </div>
                ) : null}
              </p>
            </div>
          </div>
          <div className="ListRenderProduct">{listRenderLaboratorie}</div>
          <div className="RenderPageNumbersProducts">
                <ul className="pageNumbersProducts" style={{color:"black"}}>
                  <li>
                    <button className="buttonsProducts" onClick={handlePrevbtn} disabled={currentPage == pageNumbers[0]? true:false}>Ant</button>
                  </li>
                    {pageDrecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                  <li>
                    <button className="buttonsProducts" onClick={handleNextbtn} disabled={currentPage == pageNumbers[pageNumbers.length - 1]? true:false}>Sigu</button>
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductslList;
