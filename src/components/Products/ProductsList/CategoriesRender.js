import React from 'react';
import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
  } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";





const CategoriesRender = ({categoria, setRenderProducts, renderProducts}) => {

  const { register, handleSubmit, reset } = useForm();



    return (
      <FormControlLabel 
        control={<Radio 
        name="checkedB" 
        color="primary" 
        value={categoria}/>}
        label={categoria}
      />
    );
};

export default CategoriesRender;