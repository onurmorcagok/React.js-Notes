import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
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
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
