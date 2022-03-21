import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import './styles/DonationForm.css';

const DonationForm = () => {


    const { state } = useLocation();
    const { id } = state;

    useEffect(() => {
        console.log(id);
    }, [id]);


    const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [email, setEmail] = useState("");
    // const [amount, setAmount] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <Header />
            <div className="form">
                Enter details for your donation
                <br /><br />

                <div className="rowForm">
                    <div className="labels">Donor's first name:</div>
                    <Form.Control required placeholder="Enter your first name" type="text" onChange={e => setFname(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </div>

                <div className="rowForm">
                    <div className="labels">Donor's last name:</div>
                    <Form.Control placeholder="Enter your last name" type="text" onChange={e => setFname(e.target.value)} />
                </div>

                <div className="rowForm">
                    <div className="labels">Donor's email:</div>
                    <Form.Control placeholder="Enter your email address" type="text" onChange={e => setFname(e.target.value)} />
                </div>

                <div className="rowForm">
                    <div className="labels">Donation amount:</div>
                    <Form.Control placeholder="Enter the amount" type="text" onChange={e => setFname(e.target.value)} />
                </div>

                <div className="rowForm">
                    <Button variant="primary" onClick={handleSubmit} >Donate</Button>
                </div>

                <div className="rowForm">
                    <Button variant="outline-primary">Reset</Button>
                </div>

            </div >
            <Footer />
        </div>
    );
}

export default DonationForm;