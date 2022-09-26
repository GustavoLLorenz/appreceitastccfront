import React, { useContext } from 'react';
import BarraDePesquisa from './BarraDePesquisa';
import RadioInput from './RadioInput';
import MyContext from '../context/Context';

function Header() {
  const { searchBar } = useContext(MyContext);

  return (
    <div>
      {searchBar ? <BarraDePesquisa /> : ''}
      <RadioInput />
    </div>
  )
}

  export default Header;
