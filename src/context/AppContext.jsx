import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const defaultState = {
  isAuthorized: null,
};

const defaultActions = {
  authorizeTo: () => {},
};

export const AppContext = createContext({
  ...defaultState,
  ...defaultActions,
});

export const AppConsumer = AppContext.Consumer;

export const AppProvider = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(false);

  const authorizeTo = (authorized) => {
    setAuthorized(authorized);
  };

  const stateValue = {
    isAuthorized,
    authorizeTo,
  };

  console.log(stateValue, "gg");

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  );
};

export const useAppStateValue = () => React.useContext(AppContext);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.any,
};
