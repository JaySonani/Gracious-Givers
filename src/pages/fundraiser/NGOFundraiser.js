import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import FundraiserDetails from '../../components/fundraiser/FundraiserDetails';
import FundraiserDonation from '../../components/fundraiser/FundraiserDonation';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as FundraiserConstants from "../../components/fundraiser/FundraiserConstants";
import Axios from "axios";
import './styles/fundraisers.css';
import FundraiserStatus from "../../components/fundraiser/FundraiserStatus";
import { Col, Container, Row } from "react-bootstrap";

export default function NGOFundraiser() {

    let eventParam = useParams();
    const eventId = eventParam.id;      
    const [event, setEvent] = useState({});      
    const getFundraiserDetailsURI = FundraiserConstants.apiBaseUrl + `/${eventId}`;
    
    useEffect(() => {
        Axios.get(getFundraiserDetailsURI)
            .then((response) => {
                if (response.status === 200) {
                    setEvent(response.data);
                }
            })
            .catch((error) => {
                console.log('Error in getting details of the fundraiser :' + error);
            });
               
    }, []);

    return (
        <>
            <Header />
                <Container className='mb-5 tab-div'>    
                    <Row>
                        <Col xs={0} md={1}></Col>
                        <Col xs={0} md={10}>
                            <Row>
                                <Col xs={12} md={8}>
                                    <FundraiserDetails event={event} />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Row style = {{marginTop:'40px', marginBottom:'15px'}}>
                                        <Col style={{textAlign:'center'}}>
                                            <FundraiserStatus statusValue={event.status} /> 
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        {   
                                            event.status !== 'Pending Admin Approval' &&
                                            <FundraiserDonation event={event} isNgo="true" />
                                        }
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={0} md={1}></Col>
                    </Row>
                </Container>        
            <Footer />
        </>
    );
}
