import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Greeting from "./Greeting";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Greeting} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
