import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { isAuthenticated } from "../../utils/Network";
import Header from "../navbar/Header";
import Footer from "../navbar/Footer";
import { Accordion, Badge, Container } from "react-bootstrap";


const notificationURL = "https://gracious-givers-backend.herokuapp.com/notification/adminNotification";

const Notification = () => {
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        axios.get(notificationURL).then((response) => {
            setNotification(response.data);
        })
    }, []);

    const ngoID = isAuthenticated().user_id;

    return (
        <div className="parentDiv">
            <Header />
            <Container>
                <h1>
                    <Badge bg="secondary">Events pending for Approval </Badge>
                </h1>

                {notification.map((value, index) => {
                    return <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{value.title}</Accordion.Header>
                            <Accordion.Body>
                                {value.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                })}
            </Container>
            <Footer />

        </div>
    );
}

export default Notification;