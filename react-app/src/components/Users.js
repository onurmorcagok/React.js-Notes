import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              age={user.age}
              department={user.department}
            ></User>
          );
        })}
      </div>
    );
  }
}

export default Users;
