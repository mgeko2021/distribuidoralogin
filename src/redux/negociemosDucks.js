/* eslint-disable */
// mas de un ducks productos login 
// import axios from 'axios'

// constantes
const dataProducts ={
    array:[]
    // si es un objeto
}

//types
const GET_PRODUCTS_FINE = 'GET_PRODUCTS_FINE'

// reducer va a hapetar lista de pokemosnes y los envia a l estado o contante para poderlo consumir en algun componente
export default function negociemosReducer(state = dataProducts, action){
    switch(action.type){  //si va cmamabiando esta variable y a este le queremos generar acciones
        case GET_PRODUCTS_FINE:
            return {...state, array:action.payload}
        default:
            return state
    }
}

// actions la axion cosume la api, modificar pasar a otra pagina

export const getProductsAction =(dataNoObs) => (dispatch, getState) =>{  //todo esto es action
// primer arrw recibimos prametros para enviar a esta funcion algunas si otras no
//dispatch:activar el reducer
// obtener la data del estate

    dispatch({
        type: GET_PRODUCTS_FINE,
        payload: dataNoObs
    })

    //http://181.143.234.138:8080/api.atlas.negociemos/rest/ws/items?descripcion&id_item=&id_liprec=&id_lidesc=&id_laboratorio=GF
}


    

