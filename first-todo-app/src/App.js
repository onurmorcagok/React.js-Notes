import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Todos from "./components/Todos";
import AddTodo from "./forms/AddTodo";
import UpdateTodo from "./forms/UpdateTodo";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container col-md-6">
          <Navbar title="Todo List App"></Navbar>
          <Switch>
            <Route exact path="/" component={Todos}></Route>
            <Route exact path="/addTodo" component={AddTodo}></Route>
            <Route exact path="/updateTodo/:id" component={UpdateTodo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
