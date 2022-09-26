<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 961db85b1444254e45ae4bbbaf31395e4b39b5f5
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
<<<<<<< HEAD
import BarraDePesquisa from './BarraDePesquisa';

function Header(props) {
  const [searchBar, setSearchBar] = useState(false);
=======

function Header(props) {
>>>>>>> 961db85b1444254e45ae4bbbaf31395e4b39b5f5
  const { title } = props;

  const history = useHistory();

  const goToProfile = () => history.push('/profile');

  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>
      <button type="button" onClick={ goToProfile }>
        <img src={ ProfileIcon } data-testid="profile-top-btn" alt="Profile Top Icon" />
      </button>
<<<<<<< HEAD
      { (title === 'Meals' || title === 'Drinks') && (
        <button type="button" onClick={ () => setSearchBar(!searchBar) }>
          <img
            src={ SearchIcon }
            data-testid="search-top-btn"
            alt="Search Top Icon"
          />
        </button>
      )}
      {searchBar && <BarraDePesquisa /> }
=======
      { (title === 'Meals' || title === 'Drinks')
      && <img src={ SearchIcon } data-testid="search-top-btn" alt="Search Top Icon" />}
>>>>>>> 961db85b1444254e45ae4bbbaf31395e4b39b5f5
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
