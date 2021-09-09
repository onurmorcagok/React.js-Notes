import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PersonContext } from "../contexts/PersonContext";

const AddForm = () => {
  const { addPerson } = useContext(PersonContext);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

  const [newPerson, setNewPerson] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newPerson;

  const onInputChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
          rows={3}
        />
      </Form.Group>

      <br />

      <Button variant="success" type="submit">
        Add New Person
      </Button>
    </Form>
  );
};

export default AddForm;
