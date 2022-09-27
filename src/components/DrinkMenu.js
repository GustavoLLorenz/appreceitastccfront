import React, { useContext } from 'react';
import MyContext from '../context/Context';

function DrinkMenu() {
  const { dataSearchDrink } = useContext(MyContext);
  const max = 12;

  return (
    <div>
      <h2>Cardápio de drink</h2>
      <ul>
        {Object.keys(dataSearchDrink).length !== 0 ? (
          (dataSearchDrink.drinks).splice(0, max).map((drink) => (
            <li key={ drink.idDrink }>{drink.strGlass}</li>
          ))
        ) : 'Menu'}
      </ul>
    </div>
  );
}

export default DrinkMenu;
