import React from "react";
import {
  Col,
  Card,
  FormGroup,
  Form,
  Input,
  Label,
  CardBody,
  Button,
} from "reactstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmitRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    axios
      .post("http://localhost:3002/users", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data.status) {
          toast("Tài khoản đã tạo thành công");
        } else {
          toast("Lỗi tạo tài khoản")
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Col
        sm={{ size: 6, offset: 3 }}
        md={{ size: 6, offset: 3 }}
        lg={{ size: 6, offset: 3 }}
        xl={{ size: 6, offset: 3 }}
        style={{
          margin: "20px auto",
        }}
      >
        <ToastContainer />
        <Card>
          <CardBody>
            <div>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Register
              </h2>
            </div>
            <Form onSubmit={(e) => this.handleSubmitRegister(e)}>
              <FormGroup>
                <Label for="email">Name</Label>
                <Input
                  onChange={(e) => this.handleOnChange(e)}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => this.handleOnChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => this.handleOnChange(e)}
                />
              </FormGroup>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Button>Register</Button>
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Register;
