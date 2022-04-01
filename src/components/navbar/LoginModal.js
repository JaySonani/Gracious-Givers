/**
 * Author: Venkata Saikiran Kattekola (B00857007)
 */
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Login from "../../pages/user_management/Login";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="custom-btn-header"
        id="login-btn"
        style={{marginRight: "10px"}}
        onClick={handleShow}
      >
        NGO Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login As NGO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
          <a variant="primary" className="" href="/ForgotPassword">
            Forgot Password
          </a>
          <Row className="mb-3">
            <Col className="mb-2" style={{ "margin-top": 10 + "px" }}>
              <a variant="primary" className="" href="/Register">
                Don't have an account - NGO Register
              </a>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
