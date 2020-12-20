import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    default:
      return state;
  }
};

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
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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
