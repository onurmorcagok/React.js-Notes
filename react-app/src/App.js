import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Onur MORCAGÖK",
        age: "24",
        department: "Frontend Development",
      },
      {
        id: 2,
        name: "Samim ŞEN",
        age: "25",
        department: "Backend Development",
      },
      {
        id: 3,
        name: "Cihan ÖNERYILDIZ",
        age: "22",
        department: "System Administration",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
