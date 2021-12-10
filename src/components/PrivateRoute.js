import React, { useEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useAuth() 
    const location = useLocation()
    console.log(location.pathname)

    return (
     <Route {...rest}>
         {auth.tokenAuth ? (
         <Component/>
         ):(
          <Redirect to ={{pathname:`/`, state: { from:location }}}/> 
        //   <Redirect to ={{pathname:`/`, state: { from:location }}}/> 
          )}
        </Route>
    );
}

export default PrivateRoute;