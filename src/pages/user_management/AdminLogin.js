import { React, Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Header from "../../components/navbar/Header";
import Footer from "../../components/navbar/Footer";
import axios from "axios";
import { authenticateUser, redirectUser } from "../../utils/Network";
export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formField: {
        email: "",
        password: "",
        securityQ: "",
        securityA: "",
      },
      formErrors: {
        email: "",
        password: "",
        securityQ: "",
        securityA: "",
      },
      // validated: false
    };
  }
  handleValueChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const fields = { ...this.state.formField };
    fields[field] = value;
    this.setState({ formField: fields });

    // Remove error on the field
    if (!!this.state.formErrors[field]) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          [field]: null,
        },
      });
    }
  };

  validateForm = () => {
    console.log("Validating the form");
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     this.validateForm();
  //     const numberOfErrors = Object.values(this.state.formErrors).filter(
  //       (value) => value != null || value !== ""
  //     ).length;
  //     if (numberOfErrors > 0) {
  //     } else {
  //       window.alert("Make a POST API request");
  //     }
  //   };
  handleAdminLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://gracious-givers-backend.herokuapp.com/auth/login/admin", {
        username: this.state.formField.username,
        password: this.state.formField.password,
        security_a1: this.state.formField.security_a1,
        security_a2: this.state.formField.security_a2,
      })
      .then(function (response) {
        console.log(response);
        authenticateUser(response);
        redirectUser("/admin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const formField = this.state.formField;
    const formError = this.state.formErrors;
    return (
      <>
        <Header />
        <Container className="mb-5" id="login-admin-form">
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Row className="mb-3">
                <Col>
                  <h4 id="create-update-form-label">Login as Admin User</h4>
                </Col>
              </Row>
            </Col>
          </Row>

          <Form noValidate onSubmit={this.handleAdminLogin}>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom01">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  required
                  name="username"
                  type="text"
                  placeholder="Please enter the username"
                  value={formField.username}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.username}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.username}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  placeholder="Please enter the password"
                  value={formField.password}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.password}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom03">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Control
                  required
                  name="security_a1"
                  type="text"
                  placeholder="Please enter the answer"
                  value={formField.security_a1}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.security_a1}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.security_a1}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom04">
                <Form.Label>What is your favorite food?</Form.Label>
                <Form.Control
                  required
                  name="security_a2"
                  type="text"
                  placeholder="Please enter the answer"
                  value={formField.security_a2}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.security_a2}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.security_a2}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="custom-btn-header"
            >
              Login
            </Button>
          </Form>
        </Container>
        <Footer />
      </>
    );
  }
}
