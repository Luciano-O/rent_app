import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={ Login }/>
    </Switch>
  );
}

export default App;