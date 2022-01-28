import './App.css';
import HomePage from './components/Homepage';
import {
  HashRouter as  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Products from './components/Products';
import BuyProduct from './components/HomePage/Banner/BuyProduct';
// import AuthProvider from './Auth/AuthProvider';
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import AuthProvider from './Auth/AuthProvider';
import Laboratorie from './components/Laboratorie';
import Verificar from './components/Verificar';
import PurchaseSummary from './components/PurcharseSummary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Nosotros from './components/Nosotros';
import Account from './components/Account';


function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <AuthProvider>  
              <PublicRoute exact path="/" component={HomePage}/>
              <PublicRoute exact path="/laboratorio/:id" component={Laboratorie}/>
              <PublicRoute exact path="/verificacion/:token" component={Verificar}/>
              <PublicRoute exact path="/nosotros" component={Nosotros}/>
              <PrivateRoute exact path="/cuenta" component={Account}/>
              <PrivateRoute exact path="/compraproducto/:id" component={BuyProduct}/>
              <PublicRoute exact path="/productos" component={Products}/>
              <PrivateRoute exact path="/compras" component={PurchaseSummary}/>
            </AuthProvider>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
