import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Feed} />
      </Switch>
    </div>
  );
};

export default App;
