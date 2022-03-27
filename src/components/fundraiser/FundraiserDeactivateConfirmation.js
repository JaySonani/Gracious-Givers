import { Modal, Button, Row, Col, Container } from "react-bootstrap";

export default function FundrasierDeactivateConfirmation(props) {

    const fundraiser = props.fundraiser;
    const show = props.show;
    const handleHide = props.onHide;
    const handleDeactivate = props.onDeactivate;

    return (

        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm deactivation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you should you want to deactivate the fundraiser <strong>"{fundraiser.title}"</strong>?
                <br/><br/>
                Your organization can longer raise funds against this fundraiser after deactivation.
            </Modal.Body>
            <Modal.Footer>
                <Container className='text-center'>
                    <Row>
                        <Col xs={6} md={6}>
                            <Button id="button-confirm-deactivate" onClick={() => handleDeactivate(fundraiser)}>
                                Deactivate
                            </Button>   
                        </Col>
                        <Col xs={6} md={6}>
                            <Button id="button-cancel" onClick={handleHide} >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}