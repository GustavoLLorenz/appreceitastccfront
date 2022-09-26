import React, { useContext } from 'react';
import MyContext from '../context/Context';

function RadioInput() {
  const { searchBar, setSearchBar } = useContext(MyContext);
  // console.log(setSearchBar);
  return (
    <div>
      <input type="radio" name="Ingredient" data-testid="ingredient-search-radio" />
      Ingredient
      <input type="radio" name="Name" data-testid="name-search-radio" />
      Name
      <input type="radio" name="First letter" data-testid="first-letter-search-radio" />
      First letter
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => setSearchBar(!searchBar) }
      >
        Buscar
      </button>
    </div>
  );
}

export default RadioInput;
