import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/addUser" component={AddUser} />
            <Route exact path="/updateUser/:id" component={UpdateUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
