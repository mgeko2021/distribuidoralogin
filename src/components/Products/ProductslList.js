import { useRef, useState } from "react";
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
import data from "../../data/items.json"
import { getProductsAction } from "../../redux/negociemosDucks";

// import CategoriesRender from "./ProductsList/categoriesRender";

function ProductslList({ infoBanner }) {
  const { register, handleSubmit, reset } = useForm();

  const [nameCheckBox, useNameCheckBox] = useState("bayer");
  const [value, setValue] = useState([0, 10000]);
  const [maxValue, setMaxValue] = useState(9000);
  const [minValue, setMinValue] = useState(0);
  const [grid, setGrid] = useState(100 / 4);
  const [categoriesRender, setCategoriesRender] = useState([]);
  let [laboratory, setLaboratory] = useState([]);
  const [order, setOrder] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [flag, setFlag] = useState(false);
  const [changeCategorire, setChangeCategorie] = useState(false)

  const laboratoriRef = useRef(0);

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
  const [is576px, set576px] = useState(false)


  const auth = useAuth();
  const dispatch = useDispatch();

  // let renderProducts = useSelector((store) => store.dataProducts.array);

  let funcionRender = () => {
    const randomNumberConst = Math.floor(
      Math.random() * (renderProducts.length - 1)
    );
    setRandomNumber(randomNumberConst);
    localStorage.setItem("datos", JSON.stringify(renderProducts));
    localStorage.setItem("select", JSON.stringify(renderProducts));
    const categories = [];
    const laboratory = [];
    if (renderProducts.length > 0) {
      // ID_CRICLA1
      
      for (let i = 0; i < renderProducts.length; i++) {
        if (renderProducts[i].CMLINEAS_DESCRIPCION) {
          categories.push(renderProducts[i].CMLINEAS_DESCRIPCION.toUpperCase());
          let laboratoryObject ={
            CMCRICLA_DESCRIPCION:`${renderProducts[i].CMCRICLA_DESCRIPCION}`,
            ID_CRICLA1:`${renderProducts[i].ID_CRICLA1},${renderProducts[i].CMCRICLA_DESCRIPCION}`,
          }
          laboratory.push(laboratoryObject);
        }
      }
    }



    const unique = categories.filter((valor, indice) => {
      return categories.indexOf(valor) === indice;
    });

      var hash2 = {};
      const laboratory2 = laboratory.filter(function(current) {
      var exists2 = !hash2[current.CMCRICLA_DESCRIPCION];
      hash2[current.CMCRICLA_DESCRIPCION] = true;
      return exists2;
    });

    if (unique.length > 0) {
      setCategoriesRender(unique);
    }
    if (laboratory2.length > 0) {
      setLaboratory(laboratory2);
    }

  }

  
  // useEffect(() => {
  //   localStorage.setItem("listLaboratoryRender", JSON.stringify(listLaboratoryRender));
  //   localStorage.setItem("offerProducts", JSON.stringify(offerProducts));
  //   if (JSON.parse(localStorage.getItem("datos"))) {
  //     let holi = JSON.parse(localStorage.getItem("datos"))
  //     setRenderProducts(holi)
  //   }  
  //   if (JSON.parse(localStorage.getItem("offerProducts"))) {
  //     let holi2 = JSON.parse(localStorage.getItem("offerProducts"))
  //     setOfferProducts(holi2)
  //   }  
 
  // }, [])
  




  useEffect(() => {
    if (renderProducts.length > 0) {
    setChangeCategorie(false)
    var maxAndMin = renderProducts.slice(0);
    maxAndMin.sort(function (a, b) {
      return a.PRECIO_MIN_1 - b.PRECIO_MIN_1;
    });
    const maximoValor = Number(maxAndMin[maxAndMin.length - 1].PRECIO_MIN_1);
    const minimoValor = Number(maxAndMin[0].PRECIO_MIN_1);
    setMaxValue(maximoValor);
    setMinValue(minimoValor);
    setValue([minimoValor, maximoValor]);
    }


  }, [changeCategorire]);

  useEffect(() => {

    const dataNoObs = data.filter(data=> {return data.PRECIO_MIN_1 != 1 && data.PRECIO_MIN_1 != null && !isNaN(data.PRECIO_MIN_1)})
    dispatch(getProductsAction(dataNoObs)) 
    if(renderProducts.length > 0){
      funcionRender()
    }

  }, []);

  

  useEffect(()=> {
     
      if(window.screen.width <577  ){
        setPageNumberLimit(4)
        setmaxpageNumberLimit(4)
        set576px(true)
        setPostsPerPage(6);
        setGrid(75);

      }
  },[])

  // CMCRICLA_DESCRIPCION:`${renderProducts[i].CMCRICLA_DESCRIPCION}`,
  // ID_CRICLA1:`${renderProducts[i].ID_CRICLA1}`,

  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = renderProducts.slice(indexOfFirstPost, indexOfLastPost);
  const listLaboratoryRender = laboratory.map((laboratory, index) => (
    <LaboratoryRender key={index} laboratory={laboratory.CMCRICLA_DESCRIPCION} laboratoryValue={laboratory.ID_CRICLA1} />
  ));


  
  const listCategoriesRender = categoriesRender.map((categoria, index) => (
    <CategoriesRender key={index} categoria={categoria} setRenderProducts={setRenderProducts} renderProducts={renderProducts}  />
  ));
  const listRenderLaboratorie = currentPosts.map((products, index) => (
    <ProductListRender key={index} products={products} grid={grid} />
  ));

  const handleChange = (event, newValue) => {

    var select = JSON.parse(localStorage.getItem("select"));
    setRenderProducts(select);
    setValue(newValue);
    const rangePrice = select.filter((price) => {
      if (price.PRECIO_MIN_1) {
        return price.PRECIO_MIN_1 >= value[0] && price.PRECIO_MIN_1 <= value[1];
      }
    });
    if(rangePrice.length > 0){
      setRenderProducts(rangePrice);
    }
    
  };
  

  const handleChangeSelct = (e) => {
    
    console.log(e.target.value);
    
    let laboratoryFilter = e.target.value
    var datos2 = JSON.parse(localStorage.getItem("datos"));
    setRenderProducts(datos2);
    if(laboratoryFilter == "TODOS"){
      setChangeCategorie(true)
      localStorage.setItem("select", JSON.stringify(datos2));
      return
    }
  
    const laboratoryFilterValue = datos2.filter((item) => {
      if (item.CMCRICLA_DESCRIPCION && laboratoryFilter != null) {
        return item.CMCRICLA_DESCRIPCION == laboratoryFilter
      }
    });

    console.log(laboratoryFilterValue);
    
    if(laboratoryFilterValue.length > 0){
        setRenderProducts(laboratoryFilterValue);
        setChangeCategorie(true)
        localStorage.setItem("select", JSON.stringify(laboratoryFilterValue));
    }
  };

  const ChangeCheckBox = (e) => {
        
    let categorieFilter = e.target.value

    var datos3 = JSON.parse(localStorage.getItem("datos"));
    setRenderProducts(datos3);
    if(categorieFilter == "TODOS"){
      setChangeCategorie(true)
      localStorage.setItem("select", JSON.stringify(datos3));
      return
    }
    const categorieFilterValue = datos3.filter((item) => {
      if (item.CMLINEAS_DESCRIPCION && categorieFilter != null) {
        return item.CMLINEAS_DESCRIPCION == categorieFilter
      }
    });
    console.log(categorieFilterValue);
    
    if (categorieFilterValue.length > 0) {
      setRenderProducts(categorieFilterValue)
      setChangeCategorie(true)
      localStorage.setItem("select", JSON.stringify(categorieFilterValue));
    }
    
  }

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

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(renderProducts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handeclick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxpageNumberLimit + 1 && number > minpageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handeclick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxpageNumberLimit) {
      setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxpageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip;</li>;
  }

  let pageDrecrementBtn = null;
  if (minpageNumberLimit >= 1) {
    pageDrecrementBtn = <li onClick={handlePrevbtn}> &hellip;</li>;
  }

  const [searchtext, setSearchtext] = useState("");

  const handleChangeSearch = (e) => {
    var datos = JSON.parse(localStorage.getItem("datos"));
    setRenderProducts(datos);

    let searchVal = e.target.value;
    let suggestion = [];
    if (searchVal.length > 0) {
      suggestion = datos.filter((e) =>
        e.DESCRIPCION.toLowerCase().includes(searchVal.toLowerCase())
      );
      // setResfound(suggestion.length !== 0 ? true : false);
    }
    if (suggestion.length > 0) {
      setTimeout(() => {
        setRenderProducts(suggestion);
      }, 500);
    }

    // setRenderProducts(rangePrice);
  };

  const onSubmit = dataBuy => {
    console.log();
    
  } 



  return (
    <div className="ProductsList row  col-sm-12  col-xl-9 mx-auto mt-5 mb-5 p-0">
      {renderProducts.length > 0 ?(
      <div className="ProductListFlex d-lg-flex col-12 col-sm-11 col-md-11  col-xl-12  mx-auto p-0">
        <div className="FilterProduct col-12 col-sm-9 col-md-9 col-lg-4 mx-auto p-0'">
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
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <div className="FilterProductBox ">
              <div className="CategoriesProducts">
                <h3>Categorias</h3>
                <div className="Categories" >
                {/* <FormControlLabel control={<Checkbox name="checkedB" color="primary" value={"Todos"}/>}
                 label={"TODOS"}
                  onChange={()=> {}} 
                 /> */}
                  <RadioGroup 
                    aria-label="gender"
                    name="gender1" 
                    defaultValue="TODOS"
                    onChange={ChangeCheckBox}>
                    <FormControlLabel 
                      control={<Radio 
                      name="checkedB" 
                      color="primary" 
                      value={"TODOS"}/>}
                      label={"TODOS"}
                    />
                    {listCategoriesRender}
                  </RadioGroup>
                  </div>
              </div>
              {auth.tokenAuth ? (
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
                </div>
              ) : null}
              {offerProducts[randomNumber].ID_CODBAR ? (
                <Link
                  to={`/compraproducto/${offerProducts[randomNumber].ID_ITEM}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    dispatch(getProductBuyAction(offerProducts[randomNumber]));
                  }}
                >
                  <div className="OffersProducts">
                    <h3>Ofertas</h3>
                    <img
                      src={`img/${offerProducts[randomNumber].ID_CODBAR}.jpg`}
                      alt="img"
                    />
                    <h2>{offerProducts[randomNumber].DESCRIPCION}</h2>
                    {auth.tokenAuth ? (
                      <p style={{ color: "green" }}>
                        {formatNumber(offerProducts[randomNumber].PRECIO_MIN_1)}
                      </p>
                    ) : null}
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
                    <option aria-label="None" value="TODOS">TODOS</option>
                    {laboratoriRef.current}
                  </Select>
                </FormControl>
              </div>
            </div>
          {/* </form> */}
        </div>
        <div className="ProductsRenderList col-11 col-sm-10 col-lg-8 p-0 mx-auto">
          <div className="ProductsGrid">
            <div className="IconsProductsGrid">
              <ViewModuleIcon
                onClick={() => {
                  setPostsPerPage(6);
                  if(!is576px){
                    setGrid(100 / 3) 
                  }
                }}
              />
              <AppsIcon
                onClick={() => {
                  setPostsPerPage(9);
                  if(!is576px){
                    setGrid(100 / 3) 
                  }
                }}
              />
              <ViewComfyIcon
                onClick={() => {
                  setPostsPerPage(12);
                  if(!is576px){
                    setGrid(100 / 4);
                  }
                 
                }}
              />
            </div>
            <div className="CountProductsGrid">
              <p className="m-0">
                Encontrado  <span style={{color:"blue", fontWeight:"700"}}>{renderProducts.length ? renderProducts.length : 0}{" "}</span> 
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
                      Mayor a menor Precio
                    </button>
                    <button
                      onClick={() => {
                        setOrder(!order);
                        sortNumbersLower();
                      }}
                    >
                      Menor a mayor Precio
                    </button>{" "}
                  </div>
                ) : null}
              </p>
            </div>
          </div>
          <div className="ListRenderProduct">{listRenderLaboratorie}</div>
          <div className="RenderPageNumbersProducts">
            <ul className="pageNumbersProducts p-0" style={{ color: "black" }}>
              <li>
                <button
                  className="buttonsProducts"
                  onClick={handlePrevbtn}
                  disabled={currentPage == pageNumbers[0] ? true : false}
                >
                  Ant
                </button>
              </li>
              {pageDrecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              <li>
                <button
                  className="buttonsProducts"
                  onClick={handleNextbtn}
                  disabled={
                    currentPage == pageNumbers[pageNumbers.length - 1]
                      ? true
                      : false
                  }
                >
                  Sigu
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      ): null}
    </div>
  );
}

export default ProductslList;
