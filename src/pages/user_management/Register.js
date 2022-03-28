import { React, Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import axios from "axios";
import { redirectUser } from "../../utils/Network";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formField: {
        user_id: "",
        email: "",
        password: "",
        cpassword: "",
        ngo_name: "",
        target_group: "",
      },
      formErrors: {
        user_id: "",
        email: "",
        password: "",
        cpassword: "",
        ngo_name: "",
        target_group: "",
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

  handleSubmit = (event) => {
    event.preventDefault();

    //this.validateForm();
    //const numberOfErrors = Object.values(this.state.formErrors).filter(
    //(value) => value != null || value !== ""
    // ).length;
    //if (numberOfErrors > 0) {
    //} else {
    axios
      .post("https://gracious-givers-backend.herokuapp.com/auth/register", {
        email: this.state.formField.email,
        password: this.state.formField.password,
        user_id: this.state.formField.user_id,
        ngo_name: this.state.formField.ngo_name,
        target_group: this.state.formField.target_group,
      })
      .then(function (response) {
        console.log(response);
        redirectUser("/Login");
      })
      .catch(function (error) {
        console.log(error);
      });
    //}
  };
  toggleTargetGroup = (event) => {
    console.log(event);
    // const field = event.target.name;
    const value = event.target.value;
    console.log(value);
  };
  render() {
    const formField = this.state.formField;
    const formError = this.state.formErrors;

    return (
      <>
        <Header />
        <Container className="mb-5" id="create-ngo-form">
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <Row className="mb-3">
                <Col>
                  <h4 id="create-update-form-label">Register NGO User</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Form noValidate onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom01">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  required
                  name="user_id"
                  type="text"
                  placeholder="Please enter the userid"
                  value={formField.userid}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.userid}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.userid}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom02">
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
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  placeholder="Please enter the Password"
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
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom04">
                <Form.Label>Confirm the Password</Form.Label>
                <Form.Control
                  required
                  name="cpassword"
                  type="password"
                  placeholder="Please confirm the Password"
                  value={formField.cpassword}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.cpassword}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.cpassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom05">
                <Form.Label>NGO name</Form.Label>
                <Form.Control
                  required
                  name="ngo_name"
                  type="text"
                  placeholder="Please enter the NGO name"
                  value={formField.ngoname}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.ngoname}
                />

                <Form.Control.Feedback type="invalid">
                  {formError.ngo_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="5" md="5" controlId="validationCustom06">
                <Form.Label>Target Group</Form.Label>
                <Form.Control
                  required
                  name="target_group"
                  type="text"
                  placeholder="Please enter the target group (Eg: Children,social welfare)"
                  value={formField.ngoname}
                  onChange={this.handleValueChange}
                  isInvalid={!!formError.ngoname}
                />

                <Form.Control.Feedback type="invalid">
                  {formError.target_group}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="custom-btn-header"
            >
              Register
            </Button>
          </Form>
        </Container>
        <Footer />
      </>
    );
  }
}
//export default Register;
