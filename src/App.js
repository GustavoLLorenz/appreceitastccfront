import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderContext from './context/ProviderContext';
import TelaDeLogin from './components/TelaDeLogin';
import Menu from './components/Menu';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <ProviderContext>
          <Route exact path="/" component={ TelaDeLogin } />
          <Route exact path="/meals" component={ Menu } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </ProviderContext>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
