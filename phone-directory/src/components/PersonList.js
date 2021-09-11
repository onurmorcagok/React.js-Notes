import { useContext, useState, useEffect } from "react";

import { Button, Modal } from "react-bootstrap";
import { PersonContext } from "../contexts/PersonContext";

import Person from "./Person";
import AddForm from "./AddForm";

const PersonList = () => {
  const { persons } = useContext(PersonContext);

  const [show, setShow] = useState(false); // Modal first value

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  // useEffect hook works when there is a change
  useEffect(() => {
    handleClose();
  }, [persons]); // Persons array works when there is a change

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Phone <b>Directory</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Person</span>
            </Button>
          </div>
        </div>
      </div>
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
          {persons.map((person) => (
            <tr key={person.id}>
              <Person person={person} />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PersonList;
