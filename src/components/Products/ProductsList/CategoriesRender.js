import React from 'react';
import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
  } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";


const CategoriesRender = ({categoria}) => {
    return (
        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />}
        label={categoria}
      />
    );
};

export default CategoriesRender;