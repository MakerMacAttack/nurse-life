import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import { Route } from "react-router-dom";
import { getPosts } from "./services/Posts";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={getPosts} />
    </div>
  );
};

export default App;
