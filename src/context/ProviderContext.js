import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function ProviderContext({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [searchBar, setSearchBar] = useState(true);

  const contextValue = {
    buttonDisable,
    userEmail,
    password,
    setEmail,
    setPassword,
    setButtonDisable,
    searchBar,
    setSearchBar,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;
