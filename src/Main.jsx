import React from "react";
import AppProvider, { useAppStateValue } from "./context/AppContext";

const Main = () => {
  const { isAuthorized, authorizeTo } = useAppStateValue();

  return (
    <div>
      {isAuthorized.toString()}
      <button onClick={() => authorizeTo(true)}>Authorize</button>
    </div>
  );
};

export default Main;
