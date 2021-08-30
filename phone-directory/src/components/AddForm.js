import { Form, Button } from "react-bootstrap";

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name*" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control type="email" placeholder="Email*" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control type="text" placeholder="Phone*" required />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control as="textarea" placeholder="Address" rows={3} />
      </Form.Group>

      <br />

      <Button variant="success" type="submit">
        Add New Person
      </Button>
    </Form>
  );
};

export default AddForm;
