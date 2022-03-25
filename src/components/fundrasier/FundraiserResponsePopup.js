import { Modal, Button, Row, Col, Container } from "react-bootstrap";

export default function FundrasierResponseUp(props) {

    const show = props.show;
    const handleHide = props.onHide;
    const message = props.message;
    const type = props.type;

    return (

        <Modal show={show} onHide={handleHide}>
            <Modal.Body style = {{margin:'1rem 1rem'}}>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button id="button-cancel" onClick={handleHide} >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}