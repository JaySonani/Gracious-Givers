import { Modal, Button } from "react-bootstrap";
import "./styles/popupDialog.css";

export default function FundrasierResponseUp(props) {

    const show = props.show;
    const handleHide = props.onHide;
    const message = props.message;
    // const type = props.type;

    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Body style={{ margin: '1rem 1rem' }}>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button className="button-close" 
                        style={{width: '6rem'}} 
                        onClick={handleHide} >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}