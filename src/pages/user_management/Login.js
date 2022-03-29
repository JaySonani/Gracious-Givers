import axios from "axios";
import { React, Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import { authenticateUser, redirectUser } from "../../utils/Network";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formField: {
        email: "",
        password: "",
      },
      formErrors: {
        email: "",
        password: "",
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

  showError = () => {
    if (this.state.formErrors.email) {
      return (
        <div>
          <div
            style={{ margin: 20 + "px" }}
            class="alert alert-danger"
            role="alert"
          >
            {this.state.formErrors.email}
          </div>
        </div>
      );
    }
  };

  validateForm = () => {
    console.log("Validating the form");
  };
  handleUserLogin = (event) => {
    event.preventDefault();
    this.validateForm();
    let email = this.state.formField.email;
    let password = this.state.formField.password;
    var validEmailRegex = /\S+@\S+\.\S+/;
    if (email && !validEmailRegex.test(email)) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          email: "Please enter a valid email address",
        },
      });
    } else if (password.length == 0) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          password: "Please enter a password",
        },
      });
    } else {
      axios
        .post("https://gracious-givers-backend.herokuapp.com/auth/login/ngo", {
          email: this.state.formField.email,
          password: this.state.formField.password,
        })
        .then(function (response) {
          console.log(response);
            authenticateUser(response);
            redirectUser("/ngo/fundraiser");
          })
        .catch(function (error) {
          console.log("Catch block");
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
    //}
  };
  render() {
    const formField = this.state.formField;
    const formError = this.state.formErrors;
    return (
      <>
        <Header />
        <Container className="mb-5" id="login-ngo-form">
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Row className="mb-3">
                <Col>
                  <h4 id="create-update-form-label">Login as NGO User</h4>
                </Col>
              </Row>
            </Col>
          </Row>

          <Form noValidate onSubmit={this.handleUserLogin}>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Please enter the email"
                  value={formField.email}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.email}
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
            <Button
              variant="primary"
              className="custom-btn-header"
              type="submit"
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
