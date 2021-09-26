import { useContext, useState, useEffect } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

import EditForm from "../components/EditForm";

const Person = ({ person }) => {
  const { deletePerson } = useContext(PersonContext);

  const [show, setShow] = useState(false); // Modal first value

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [person]);

  return (
    <>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.address}</td>
      <td>{person.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deletePerson(person.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm thePerson={person} />
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
