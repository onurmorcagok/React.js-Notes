import React from "react";

const Person = ({ persons }) => {
  return (
    <React.Fragment>
      {persons.map((person) => (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.address}</td>
          <td>{person.phone}</td>
          <td>
            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </a>
            <a
              href="#deleteEmployeeModal"
              className="delete"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </a>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default Person;
