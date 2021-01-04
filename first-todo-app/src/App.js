import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Todos from "./components/Todos";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container col-md-6">
          <Navbar title="Todo List App"></Navbar>
          <Switch>
            <Route exact path="/" component={Todos}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
