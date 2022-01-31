/* eslint-disable */
// mas de un ducks productos login 

// constantes
const dataFavoriteProducts = [

]
    // si es un objeto

//types
const FAVORITES_PRODUCTS = 'FAVORITES_PRODUCTS'
const DELETE_PRODUCTS_FAVORITE = 'DELETE_PRODUCTS_FAVORITE'

// reducer va a hapetar lista de pokemosnes y los envia a l estado o contante para poderlo consumir en algun componente
export default function favoriteProductsReducer(state = dataFavoriteProducts, action){
    switch(action.type){  //si va cmamabiando esta variable y a este le queremos generar acciones
        case FAVORITES_PRODUCTS:
            return [...state, action.payload]
        case DELETE_PRODUCTS_FAVORITE:
            return state = action.payload
        default:
            return state
    }
}

// actions la axion cosume la api, modificar pasar a otra pagina

export const getProductFavorite =(itemName) => (dispatch, getState) =>{  //todo esto es action
// primer arrw recibimos prametros para enviar a esta funcion algunas si otras no
//dispatch:activar el reducer
// obtener la data del estate
    console.log(getState(), "hola")
    console.log(itemName)

// const deleteCountItem = counItem.filter(counItem=> {return counItem.ID_CODBAR != id})
// dispatch(getCountProductBuyAction(id))
// dispatch(getCountProductBuyAction(deleteCountItem))
    dispatch({
        type: FAVORITES_PRODUCTS,
        payload: itemName
    })
}
export const getCountDeleteFavoriteAction =(arraynew) => (dispatch, getState) =>{  //todo esto es action
// primer arrw recibimos prametros para enviar a esta funcion algunas si otras no
//dispatch:activar el reducer
// obtener la data del estate

// const deleteCountItem = counItem.filter(counItem=> {return counItem.ID_CODBAR != id})
// dispatch(getCountProductBuyAction(id))
// dispatch(getCountProductBuyAction(deleteCountItem))
    dispatch({
        type: DELETE_PRODUCTS_FAVORITE,
        payload: arraynew
    })
}

