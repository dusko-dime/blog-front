import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// import { setContext } from "@apollo/client/link/context";

const defaultState = {
  isAuthorized: null,
  jwtToken: null,
};

const defaultActions = {
  authorizeTo: () => {},
  setJwtToken: () => {},
};

export const AppContext = createContext({
  ...defaultState,
  ...defaultActions,
});

export const AppConsumer = AppContext.Consumer;

export const AppProvider = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(false);
  const [jwtToken, setJwtToken] = useState();

  const authorizeTo = (authorized, jwtToken) => {
    setAuthorized(authorized);
    if (authorized) {
      setJwtToken(jwtToken);
      localStorage.setItem("token", jwtToken);
    } else {
      setJwtToken(null);
      localStorage.setItem("token", null);
    }
  };

  const stateValue = {
    isAuthorized,
    jwtToken,
    authorizeTo,
    setJwtToken,
  };

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  );
};

export const useAppStateValue = () => React.useContext(AppContext);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.any,
};
