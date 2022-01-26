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
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
// import Checkbox from '@material-ui/core/Checkbox';
import CreditCardIcon from "@material-ui/icons/CreditCard";
import HouseIcon from "@material-ui/icons/House";
import BusinessIcon from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
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

function ProductslList({ infoBanner }) {
  const { register, handleSubmit, reset } = useForm();

  const [nameCheckBox, useNameCheckBox] = useState("bayer");
  const [value, setValue] = useState([0, 900]);
  const [maxValue, setMaxValue] = useState(1200);
  const [minValue, setMinValue] = useState(0);

  const renderProducts = useSelector(store=> store.dataProducts.array)



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ProductsList row col-sm-12  col-xl-9 mx-auto mt-5 mb-5 p-0">
      <div className="ProductListFlex d-md-flex col-10 col-sm-11 col-xl-12  mx-auto p-0">
        <div className="FilterProduct col-12 col-sm-9 col-md-6 col-lg-3 mx-auto p-0'">
          <div className="SearchProduct ">
            <Paper component="form" style={{ backgroundColor: "#ECECEC" }}>
              <InputBase placeholder="Buscar" style={{ paddingLeft: "1.5rem", width:"80%" }} />
              <IconButton style={{width:"20%"}} type="submit" aria-label="search">
                <SearchIcon style={{color:"#36a8ff"}} />
              </IconButton>
            </Paper>
          </div>
          <div className="FilterProductBox ">
            <div className="CategoriesProducts">
              <h3>Categorias</h3>
              <div>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label={nameCheckBox}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label={nameCheckBox}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label={nameCheckBox}
                />
              </div>
            </div>
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
            <div className="OffersProducts">
              <h3>Ofertas</h3>
              <img src="carrito_vacio.png" alt="" />
              <p>$Precio</p>
            </div>
            <div>
              <h3>Filtrar por tipo de laboratorios</h3>
              <FormControl
                variant="filled"
                style={{ width: "100%" }} /*className={classes.formControl}*/
              >
                <InputLabel htmlFor="filled-age-native-simple">
                  Laboratorio
                </InputLabel>
                <Select
                  native
                  value={null}
                  onChange={handleChange}
                  inputProps={{
                    name: "Laboratorio",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="ProductsRenderList col-12 col-sm-9 col-md-5 col-lg-8 p-0 mx-auto mt-5 ">
          <div>
            <h3>MOstrando 18 productos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductslList;
