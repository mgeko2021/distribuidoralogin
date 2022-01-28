import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import negociemosReducer from './negociemosDucks'
import produtBuyReducer from './itemBuyDucks'
import countProdutReducer from './itemsCarDucks'
import laboratorieReducer from './laboratorieDucks'
import favoriteProductsReducer from './itemFavoriteDucks'

const rootReducer = combineReducers({
    dataProducts: negociemosReducer,
    buyProduct: produtBuyReducer,
    countBuyProduct: countProdutReducer,
    dataLaboratorie: laboratorieReducer,
    favoritesProducts:favoriteProductsReducer
    
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}