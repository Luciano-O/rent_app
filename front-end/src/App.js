import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/register/Register';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={ Login }/>
      <Route exact path='/register' component={ Register }/>
    </Switch>
  );
}

export default App;
