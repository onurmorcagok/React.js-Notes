import { useContext, useState, useEffect } from "react";

import { Button, Modal, Alert } from "react-bootstrap";
import { PersonContext } from "../contexts/PersonContext";

import Person from "./Person";
import AddForm from "./AddForm";

import Pagination from "./Pagination";

const PersonList = () => {
  const { sortedPerson } = useContext(PersonContext);

  const [show, setShow] = useState(false); // Modal first value

  const [currentPage, setCurrentPage] = useState(1);

  const [personsPerPage] = useState(5);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const [showAlert, setShowAlert] = useState(false); // Alert modal initial value "false"

  // const handleShowAlert = () => setShowAlert(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  // useEffect hook works when there is a change
  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [sortedPerson]); // Persons array works when there is a change

  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = sortedPerson.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );
  const totalPagesNum = Math.ceil(sortedPerson.length / personsPerPage);

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

      <Alert
        show={showAlert}
        variant="primary"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Phone Directory is updated!
      </Alert>

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
          {currentPersons.map((person) => (
            <tr key={person.id}>
              <Person person={person} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        personsPerPage={personsPerPage}
        currentPersons={currentPersons}
        sortedPerson={sortedPerson}
      />

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
