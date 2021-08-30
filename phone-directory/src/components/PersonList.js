import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

import Person from "./Person";

const PersonList = () => {
  const { persons } = useContext(PersonContext);

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Person persons={persons} />
      </tbody>
    </table>
  );
};

export default PersonList;
