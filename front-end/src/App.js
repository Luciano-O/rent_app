import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/register/Register';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={ Login }/>
      <Route exact path='/register' component={ Register }/>
      <Route exact path='/' component={ Home } /> 
      <Route exact path='/cart' component={ Cart } />
      <Route exact path="/detalhes/:id" component={ ProductDetails }/>
    </Switch>
  );
}

export default App;
