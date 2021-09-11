import React from "react";
import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

const Person = ({ persons }) => {
  const { deletePerson } = useContext(PersonContext);

  return (
    <React.Fragment>
      {persons.map((person) => (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.address}</td>
          <td>{person.phone}</td>
          <td>
            <button className="btn text-warning btn-act" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </button>
            <button
              onClick={() => deletePerson(person.id)}
              className="btn text-danger btn-act"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default Person;
