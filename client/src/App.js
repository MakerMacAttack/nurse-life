import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import { Route, Switch } from "react-router-dom";
import PostEdit from "./components/PostEdit/PostEdit"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
};

export default App;
