import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import negociemosReducer from './negociemosDucks'
import produtBuyReducer from './itemBuyDucks'
import countProdutReducer from './itemsCarDucks'
import laboratorieReducer from './laboratorieDucks'

const rootReducer = combineReducers({
    dataProducts: negociemosReducer,
    buyProduct: produtBuyReducer,
    countBuyProduct: countProdutReducer,
    dataLaboratorie: laboratorieReducer
    
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}