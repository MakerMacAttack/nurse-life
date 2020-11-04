import React from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import Profile from "./screens/Profile/Profile";
import Header from "./components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import PostEdit from "./components/PostEdit/PostEdit";
import PostCreate from "./components/PostCreate/PostCreate";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route path="/profile" component={Profile} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
