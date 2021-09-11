import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { PersonContext } from "../contexts/PersonContext";

const EditForm = () => {
  const { updatePerson } = useContext(PersonContext);

  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name*" name="name" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control type="email" placeholder="Email*" name="email" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control type="text" placeholder="Phone*" name="phone" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          rows={3}
        />
      </Form.Group>

      <br />

      <Button variant="success" type="submit">
        Update Person
      </Button>
    </Form>
  );
};

export default EditForm;
