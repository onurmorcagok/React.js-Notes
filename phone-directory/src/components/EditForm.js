import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PersonContext } from "../contexts/PersonContext";

const EditForm = ({ thePerson }) => {
  const { updatePerson } = useContext(PersonContext);

  const person = thePerson;
  const id = person.id;

  const [name, setName] = useState(person.name);
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const [address, setAddress] = useState(person.address);

  const updatedPerson = { id, name, email, phone, address }; // Updated persons new value

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePerson(id, updatedPerson);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email*"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone*"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
