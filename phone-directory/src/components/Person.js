import { useContext, useState } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { Button, Modal } from "react-bootstrap";

import EditForm from "../components/EditForm";

const Person = ({ person }) => {
  const { deletePerson } = useContext(PersonContext);

  const [show, setShow] = useState(false); // Modal first value

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.address}</td>
      <td>{person.phone}</td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => deletePerson(person.id)}
          className="btn text-danger btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm />
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

export default Person;
