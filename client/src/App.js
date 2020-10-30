import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Feed} />
    </div>
  );
};

export default App;
