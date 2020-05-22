import React from "react";
import {
  Col,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  CardBody,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    const { status } = this.props.user;
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
        <Card>
          <CardBody>
            <div>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Login
              </h2>
            </div>
            <Form onSubmit={(e) => this.handleSubmitLogin(e)}>
              <Label for="email">
                {status === 1
                  ? "Success"
                  : status === 0
                  ? "fetching"
                  : status === -1
                  ? "Fail"
                  : ""}
              </Label>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
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
                  margin: "20px 0px",
                }}
              >
                <Button>Login</Button>
                <Link to="/register">
                  <p>Not register? Create Account</p>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { login };
console.log(mapDispatchToProps, typeof mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
