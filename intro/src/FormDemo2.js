import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Register Created !");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Email Adress</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="passowrd"
              placeholder="Password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              onChange={this.handleChange}
              type="select"
              name="city"
              id="city"
            >
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              name="description"
              id="description"
            ></Input>
          </FormGroup>
          <Button type="submit" value="Submit" color="primary">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
