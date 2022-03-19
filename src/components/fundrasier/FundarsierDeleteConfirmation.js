import { Modal, Button, Row, Col, Container } from "react-bootstrap";

export default function FundrasierDeleteConfirmation(props) {

    const fundraiser = props.fundraiser;
    const show = props.show;
    const handleHide = props.onHide;
    const handleDelete = props.onDelete;

    return (

        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you should you want to delete the fundraiser <strong>"{fundraiser.title}"</strong>?
                <br/><br/>
                Clicking <strong>“Delete”</strong> will permanently delete your fundraiser.
            </Modal.Body>
            <Modal.Footer>
                <Container className='text-center'>
                <Row>
                    <Col xs={6} md={6}>
                        <Button id="button-confirm-delete" onClick={() => handleDelete(fundraiser)}>
                            Delete
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