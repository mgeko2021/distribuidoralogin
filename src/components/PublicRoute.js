import React from 'react';
import { Redirect, Route, } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const PublicRoute = ({component: Component, ...rest}) => {
    const auth = useAuth() 

    return (
     <Route {...rest}>
         {!auth.user ? (
         <Component/>
         ):(
          <Redirect to ={'/pages'}/> 
          )}
         </Route>
    );
}

export default PublicRoute;