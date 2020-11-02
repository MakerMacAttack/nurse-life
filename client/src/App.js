import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import Header from "./components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import PostEdit from "./components/PostEdit/PostEdit";
import PostEdit from "./components/PostEdit/PostEdit"
import PostCreate from "./components/PostCreate/PostCreate";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
};

export default App;
