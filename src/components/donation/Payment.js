import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
// import './styles/Payment.css';

function Payment() {

    let validCard = false;

    let navigate = useNavigate();

    const { state } = useLocation();
    const { amount, fname, email, lname } = state;

    console.log(state);

    const [cardNumber, setCardNumber] = useState("");
    const [error, setError] = useState(false);
    const [errorHelperText, setErrorHelperText] = useState("");

    function acceptInput(input) {

        let cardValidator = /^\d+$/;

        if ((input.length < 17 && cardValidator.test(input)) || input === "") {
            setError(false);
            setErrorHelperText("");
            setCardNumber(input);
            validCard = true;
        } else {
            if (input.length < 17) {
                setError(true);
                setErrorHelperText("Only numbers are allowed.");
                validCard = false;
            } else {
                setErrorHelperText("Only 16-digits are allowed.");
            }
        }
        if (input.length === 16 && validCard) {
            validCard = true;
        }
    }

    function makePayment() {
        if (cardNumber.length === 16) {
            // Write logic to add data to donation here
            navigate("/payment/success");
        } else {
            setError(true);
            setErrorHelperText("Please enter a valid 16-digit card number.");
            alert("Please enter a valid 16-digit card number.");
        }
    }

    return (
        <div>

            <Header />
            <div className="form">
                <br /><br />
                Payment for $ {amount}
                <br /><br />

                <Form.Control required className={error && "redError"} placeholder={error ? errorHelperText : "Enter card number"} value={cardNumber} type="text" onChange={(e) => acceptInput(e.target.value)} />

                <br /><br />

                <div className="btn">
                    <Button className="donateButton" onClick={makePayment} fullWidth>MAKE PAYMENT</Button>
                </div>
                <br /><br />

            </div >
            <Footer />
        </div>
    );
}

export default Payment;