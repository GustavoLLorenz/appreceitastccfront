import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderContext from './context/ProviderContext';
import TelaDeLogin from './components/TelaDeLogin';
import Menu from './components/Menu';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <ProviderContext>
          <Route exact path="/" component={ TelaDeLogin } />
          <Route exact path="/meals" component={ Menu } />

        </ProviderContext>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
