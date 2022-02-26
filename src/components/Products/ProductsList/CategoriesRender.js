import React from 'react';
import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
  } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";



const CategoriesRender = ({categoria}) => {
  const { register, handleSubmit, reset } = useForm();

    return (
        <FormControlLabel control={<Checkbox name="checkedB" color="primary" value={categoria}/>}
        label={categoria}
        {...register("forma_pago_id")}
      />
    );
};

export default CategoriesRender;