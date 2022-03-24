import { Card, Row, Col, Dropdown } from "react-bootstrap";
import './styles/ngoFundraiserCard.css';
import FundraiserStatus from './FundraiserStatus';
import FundrasierDeleteConfirmation from "./FundarsierDeleteConfirmation";
import { useState } from "react";
import FundrasierDeactivateConfirmation from "./FundraiserDeactivateConfirmation";
import * as FundraiserConstants from './FundraiserConstants';
import Axios from "axios";

export default function NGOFundraiserCard(props) {

    const fundraiser = props.details;
    const period = props.period;
    const [showDeactivate, setShowDeactivate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    
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
        "update":`/ngo/fundraiser/update/${fundraiser._id}`,
        "donations":`/fundrasier/donations/${fundraiser._id}`,
    }
    
    const handleFundraiserAction = (event) => {
        const action = event.target.name;
        console.log("This is the selection:" + action);
        if (action === 'deactivate' ) {
            setShowDeactivate(true);
        }
        else if (action === 'delete') {
            setShowDelete(true);
        }
    }

    const handleDelete = (fundrasier) => {
        
        const id = fundrasier._id;
        const ngoId = fundraiser.ngoId;
        const deleteUrl =  FundraiserConstants.apiBaseUrl + `/${id}/ngo/${ngoId}`;
        console.log("Deleting fundraiser with ID :" + fundrasier._id);
        console.log("Delete URL is :" + deleteUrl);
        
        Axios.delete(deleteUrl)
            .then((response) => {
                if (response.status === 200) {
                    setShowDelete(false);
                }
            })
            .catch((error) => {
                console.log('Error in deleting fundraiser :' + error);           
            }); 
    }

    const handleDeactivate = (fundrasier) => {
        setShowDeactivate(false);
        console.log("Deactivating fundraiser with ID :" + fundrasier._id);
    }

    const handleCloseDeactivate = () => setShowDeactivate(false);

    const handleCloseDelete = () => setShowDelete(false);

    return (
        <Card id="ngo-fundraiser-card">
            <Card.Header as="h5"> <strong>{fundraiser.title}</strong></Card.Header>
            <Card.Body className='card-body-color'>
                {/* <Card.Title>{fundraiser.title}</Card.Title> */}

                <Row>
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={5} md={3}>Cause</Col>
                            <Col xs={7} md={9}>{fundraiser.cause}</Col>
                        </Row>
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
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={3}>End Date</Col>
                                <Col xs={7} md={9}>{formatDate(fundraiser.endDate)}</Col>
                            </Row>
                        }
                        {
                            period === 'future' &&
                            <Row>
                                <Col xs={5} md={3}>Created for</Col>
                                <Col xs={7} md={9}>{fundraiser.activeDays}&nbsp;days</Col>
                            </Row>
                        }
                        
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
                                {showDelete && <FundrasierDeleteConfirmation fundraiser={fundraiser} 
                                                                       show={true}
                                                                       onDelete={handleDelete}
                                                                       onHide={handleCloseDelete}/>}
                                {showDeactivate && <FundrasierDeactivateConfirmation fundraiser={fundraiser} 
                                                                       show={true}
                                                                       onDeactivate={handleDeactivate}
                                                                       onHide={handleCloseDeactivate}/>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>   
    );

}


