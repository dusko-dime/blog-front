import React from "react";
import AppProvider from "./context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import { ApolloProvider } from "@apollo/client";
import apiClient from "./service/apiClient";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ApolloProvider client={apiClient}>
        <AppProvider>
          <Router>
            <Switch>
              <Route path={["", "/home"]} component={Home} exact></Route>
              <Route path="/register" component={Register} exact></Route>
              <Route path="/login" component={Login} exact></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </AppProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
