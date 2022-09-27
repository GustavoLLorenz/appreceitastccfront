import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Cardapio() {
  const { dataSearch } = useContext(MyContext);
  const maximumLine = 12;

  return (
    <div>
      <h2>Cardápio de comida</h2>
      <ul>
        {Object.keys(dataSearch).length !== 0 ? (
          (dataSearch.meals).splice(0, maximumLine).map((food) => (
            <li key={ food.idMeal }>{food.strMeal}</li>
          ))
        ) : ''}
      </ul>
    </div>
  );
}

export default Cardapio;
