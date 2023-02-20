import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Greeting from "../components/Greeting";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Greeting} />
      </div>
    </BrowserRouter>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
