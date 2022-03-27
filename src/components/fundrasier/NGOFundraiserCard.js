import { Card, Row, Col, Dropdown } from "react-bootstrap";
import './styles/ngoFundraiserCard.css';
import FundraiserStatus from './FundraiserStatus';
import FundrasierDeleteConfirmation from "./FundarsierDeleteConfirmation";
import { useState } from "react";
import FundrasierDeactivateConfirmation from "./FundraiserDeactivateConfirmation";
import * as FundraiserConstants from './FundraiserConstants';
import Axios from "axios";
import FundrasierResponseUp from "./FundraiserResponsePopup";

export default function NGOFundraiserCard(props) {

    const fundraiser = props.details;
    const period = props.period;
    const onActionSuccess = props.onActionSuccess;
    const [showDeactivate, setShowDeactivate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
    const [showDeactivateSuccess, setShowDeactivateSuccess] = useState(false);
    
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
        console.log("Delete URL is :" + deleteUrl);  
        Axios.delete(deleteUrl)
            .then((response) => {
                if (response.status === 200) {
                    setShowDelete(false);
                    setShowDeleteSuccess(true);
                }
            })
            .catch((error) => {
                console.log('Error in deleting fundraiser :' + error);           
            }); 
    }

    const handleDeactivate = (fundrasier) => {
        console.log("Deactivating fundraiser with ID :" + fundrasier._id);
        const id = fundrasier._id;
        const deactivateUrl =  FundraiserConstants.apiBaseUrl + `/${id}/status/${FundraiserConstants.fundraiserStatus.deactivated}`;        
        Axios.put(deactivateUrl)
            .then((response) => {
                if (response.status === 200) {
                    setShowDeactivate(false);
                    setShowDeactivateSuccess(true);
                }
            })
            .catch((error) => {
                console.log('Error in deleting fundraiser :' + error);           
            }); 
    }

    const handleCloseDeactivate = () => setShowDeactivate(false);

    const handleCloseDelete = () => setShowDelete(false);

    const handleCloseDeleteSuccess = () => {
        setShowDeleteSuccess(false); 
        onActionSuccess();
    }

    const handleCloseDeactivateSuccess = () => {
        setShowDeactivateSuccess(false);
        onActionSuccess();
    }

    return (
        <Card id="ngo-fundraiser-card">
            <Card.Header as="h5">{fundraiser.title}</Card.Header>
            <Card.Body className='card-body-color'>
                {/* <Card.Title>{fundraiser.title}</Card.Title> */}

                <Row>
                    <Col xs={12} md={3}>
                        <Card.Img variant="top" src={fundraiser.image} />
                    </Col>
                    <Col xs={12} md={5}>
                        <Row>
                            <Col xs={5} md={4}>Cause</Col>
                            <Col xs={7} md={8}>{fundraiser.cause}</Col>
                        </Row>
                        <Row>
                            <Col xs={5} md={4}>Goal Amount</Col>
                            <Col xs={7} md={8}>{fundraiser.currency}&nbsp;{fundraiser.goalAmount}</Col>
                        </Row>
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={4}>Amount Raised</Col>
                                <Col xs={7} md={8}>{fundraiser.currency}&nbsp;{fundraiser.amountRaised}</Col>
                            </Row>
                        }
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={4}>Donors</Col>
                                <Col xs={7} md={8}>{fundraiser.donors}</Col>
                            </Row>
                        }
                        {
                            (period === 'ongoing' || period === 'past') &&
                            <Row>
                                <Col xs={5} md={4}>End Date</Col>
                                <Col xs={7} md={8}>{formatDate(fundraiser.endDate)}</Col>
                            </Row>
                        }
                        {
                            period === 'future' &&
                            <Row>
                                <Col xs={5} md={4}>Created for</Col>
                                <Col xs={7} md={8}>{fundraiser.activeDays}&nbsp;days</Col>
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
                                {showDeleteSuccess && <FundrasierResponseUp 
                                                                        show={true}
                                                                        type="success"
                                                                        message="Fundraiser deleted successfully"
                                                                        onHide={handleCloseDeleteSuccess}/>}
                                {showDeactivateSuccess && <FundrasierResponseUp 
                                                                        show={true}
                                                                        message="Fundraiser deactivated successfully"
                                                                        onHide={handleCloseDeactivateSuccess}/>}                                        
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>   
    );

}


