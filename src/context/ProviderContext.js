import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function ProviderContext({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);

  const contextValue = {
    buttonDisable,
    userEmail,
    password,
    setEmail,
    setPassword,
    setButtonDisable,
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
