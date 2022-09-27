import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { filterIngredient,
  filterName,
  filterFirstLetter,
  filterIngredientDrink, filterNameDrink, filterFirstLetterDrink } from '../services/api';

function BarraDePesquisa() {
  const [searchInput, setSearchInput] = useState('');
  const [filterSearch, setFilterSearch] = useState('');
  const [dataSearch, setDataSearch] = useState({});
  const { location: { pathname } } = useHistory();
  const history = useHistory();

  const globalAlert = 'Sorry, we haven\'t found any recipes for these filters.';
  const verifySearchHelper = async () => {
    if (data.meals === null) {
      global.alert(globalAlert);
    } else {
      if (data.meals.length === 1) {
        history.push(`/meals/${data.meals[0].idMeal}`);
      }
      setDataSearch(data);
    }
  };

  const verifySearch = async () => {
    if (filterSearch === 'ingredient') {
      const data = await filterIngredient(searchInput);
      console.log(data.meals);
      verifySearchHelper();
      /*       if (data.meals === null) {
        global.alert(globalAlert);
      } else {
        if (data.meals.length === 1) {
          history.push(`/meals/${data.meals[0].idMeal}`);
        }
        setDataSearch(data);
      } */
    }
    if (filterSearch === 'name') {
      const data = await filterName(searchInput);
      if (data.meals === null) {
        global.alert(globalAlert);
      } else if (data.meals.length === 1) {
        history.push(`/meals/${data.meals[0].idMeal}`);
      }

      setDataSearch(data);
    }
    if (filterSearch === 'first') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const data = await filterFirstLetter(searchInput);
        if (data.meals === null) {
          global.alert(globalAlert);
        } else if (data.meals.length === 1) {
          history.push(`/meals/${data.meals[0].idMeal}`);
        }

        setDataSearch(data);
      }
    }
  };
  const verifySearchDrinkHelper = async () => {
    if (data.drinks === null) {
      global.alert(globalAlert);
    } else if (data.drinks.length === 1) {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
    }
  };

  const verifySearchDrink = async () => {
    if (filterSearch === 'ingredient') {
      const data = await filterIngredientDrink(searchInput);
      verifySearchDrinkHelper();

      setDataSearch(data);
    }
    if (filterSearch === 'name') {
      const data = await filterNameDrink(searchInput);
      if (data.drinks === null) {
        global.alert(globalAlert);
      } else if (data.drinks.length === 1) {
        history.push(`/drinks/${data.drinks[0].idDrink}`);
      }
      setDataSearch(data);
    }
    if (filterSearch === 'first') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const data = await filterFirstLetterDrink(searchInput);
        if (data.drinks === null) {
          global.alert(globalAlert);
        } else if (data.drinks.length === 1) {
          history.push(`/drinks/${data.drinks[0].idDrink}`);
        }
        setDataSearch(data);
      }
    }
  };

  const verifyRoute = () => {
    if (pathname === '/meals') {
      verifySearch();
    }
    if (pathname === '/drinks') {
      verifySearchDrink();
    }
  };

  return (
    <div className="container-filters">
      <label htmlFor="search-input">
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => setSearchInput(e.target.value) }
        />
      </label>
      <label htmlFor="filters-ingredient">
        <input
          type="radio"
          id="filters-ingredient"
          name="filters-search"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="filters-name">
        <input
          type="radio"
          name="filters-search"
          id="filters-name"
          data-testid="name-search-radio"
          value="name"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        Name
      </label>
      <label htmlFor="filters-first">
        <input
          id="filters-first"
          type="radio"
          name="filters-search"
          data-testid="first-letter-search-radio"
          value="first"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        First letter
      </label>
      <input
        type="button"
        value="Pesquisar"
        data-testid="exec-search-btn"
        onClick={ verifyRoute }
      />
    </div>
  );
}
// Header.propTypes = {}
export default BarraDePesquisa;
