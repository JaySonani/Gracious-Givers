import { Card, Row, Col, Dropdown } from "react-bootstrap";
import './styles/ngoFundraiserCard.css';
import FundraiserStatus from './FundraiserStatus';
import FundrasierDeleteConfirmation from "./FundarsierDeleteConfirmation";
import { useState } from "react";
import FundrasierDeactivateConfirmation from "./FundraiserDeactivateConfirmation";

export default function NGOFundraiserCard(props) {

    const fundraiser = props.details;
    const period = props.period;
    const [show, setShow] = useState(false);
    
    const formatDate = (dateString) => {
        const targetDate = new Date(dateString);
        const months = ["January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"];
        const formattedDate = months[targetDate.getMonth()]
                                + " " + targetDate.getDate()
                                + ", " + targetDate.getFullYear();
        return formattedDate;
    }

    const actionsUrl = {
        "update":`/fundrasier/update/${fundraiser.eventId}`,
        "donations":`/fundrasier/donations/${fundraiser.eventId}`,
    }
    
    const handleFundraiserAction = (event) => {
        const action = event.target.name;
        console.log("This is the selection:" + action);
        if (action === 'delete' || action === 'deactivate' ) {
            console.log('inside delete/deactivate');
            setShow(true);
        }
    }

    const handleDelete = (fundrasier) => {
        setShow(false);
        console.log("Deleting fundraiser with ID :" + fundrasier.eventId);
    }

    const handleDeactivate = (fundrasier) => {
        setShow(false);
        console.log("Deactivating fundraiser with ID :" + fundrasier.eventId);
    }

    const handleClose = () => setShow(false);

    return (
        <Card id="ngo-fundraiser-card">
            <Card.Header as="h5"> <strong>{fundraiser.title}</strong></Card.Header>
            <Card.Body className='card-body-color'>
                {/* <Card.Title>{fundraiser.title}</Card.Title> */}

                <Row>
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={5} md={3}>Goal Amount</Col>
                            <Col xs={7} md={9}>{fundraiser.currency}&nbsp;{fundraiser.goalAmount}</Col>
                        </Row>
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={3}>Amount Raised</Col>
                                <Col xs={7} md={9}>{fundraiser.currency}&nbsp;{fundraiser.amountRaised}</Col>
                            </Row>
                        }
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={3}>Donors</Col>
                                <Col xs={7} md={9}>{fundraiser.donors}</Col>
                            </Row>
                        }
                        {/* {
                            (period === 'future') &&
                            <Row>
                                <Col xs={5} md={3}>Start Date</Col>
                                <Col xs={7} md={9}>{formatDate(fundraiser.startDate)}</Col>
                            </Row>
                        } */}
                        <Row>
                            <Col xs={5} md={3}>End Date</Col>
                            <Col xs={7} md={9}>{formatDate(fundraiser.endDate)}</Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} style={{ textAlign: 'center' }}>
                        <Row style={{ margin: '0.1rem 0' }}>
                            <Col>
                                <FundraiserStatus statusValue={fundraiser.status} />
                            </Col>
                        </Row>
                        <Row style={{ margin: '0.1rem 0' }}>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic-button" className="actions-drop-down"  >
                                        Actions
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        {
                                            (fundraiser.status  === 'Active' ||  
                                            fundraiser.status  === 'Pending Admin Approval') &&
                                            <Dropdown.Item name='update' href={actionsUrl.update} >Update</Dropdown.Item>
                                        }
                                        {     
                                            fundraiser.status  === 'Pending Admin Approval' &&
                                            <Dropdown.Item name="delete" onClick={handleFundraiserAction} >Delete</Dropdown.Item>
                                            
                                        }
                                        {
                                            fundraiser.status  === 'Active' &&
                                            <Dropdown.Item name="deactivate" onClick={handleFundraiserAction} >Deactivate</Dropdown.Item>
                                        }
                                        {
                                            (fundraiser.status  === 'Active' ||  
                                            fundraiser.status  === 'Completed' ||
                                            fundraiser.status  === 'Deactivated') &&
                                            <Dropdown.Item name="viewDonations" href={actionsUrl.donations}>View Donations</Dropdown.Item>
                                        }                
                                    </Dropdown.Menu>
                                </Dropdown>
                                {show && <FundrasierDeleteConfirmation fundraiser={fundraiser} 
                                                                       show={true}
                                                                       onDelete={handleDelete}
                                                                       onHide={handleClose}/>}
                                {show && <FundrasierDeactivateConfirmation fundraiser={fundraiser} 
                                                                       show={true}
                                                                       onDeactivate={handleDeactivate}
                                                                       onHide={handleClose}/>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>   
    );

}


