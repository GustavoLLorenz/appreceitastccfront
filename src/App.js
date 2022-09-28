import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderContext from './context/ProviderContext';
import Login from './components/Login';
import Menu from './components/Menu';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <ProviderContext>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Menu } />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route exact path="/meals/:id/in-progress" component={ RecipeInProgress } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </ProviderContext>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
