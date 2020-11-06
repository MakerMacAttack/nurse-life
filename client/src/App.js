import React, { useState } from "react";
import "./App.css";
import Feed from "./screens/Feed/Feed";
import Profile from "./screens/Profile/Profile";
import Header from "./components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import PostEdit from "./components/PostEdit/PostEdit";
import PostCreate from "./components/PostCreate/PostCreate";
import SignIn from "./components/SignIn/SignIn";
import Privacy from "./screens/Privacy/Privacy";
import Register from "./screens/Register/Register";

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => (<Feed user={user} setUser={setUser} />)} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route path="/profile" component={Profile} />
        <Route path="/sign-in" render={() => (<SignIn setUser={setUser} />)}/>
        <Route path="/privacy" component={Privacy} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
