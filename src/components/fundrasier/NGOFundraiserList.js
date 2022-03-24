import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import NGOFundraiserCard from "./NGOFundraiserCard";

export default function NGOFundraiserList(props) {

    const period = props.period;
    // const ngoId = localStorage.getItem("ngo_id");
    const ngoId = "1001";
    const getNGOEventsURI = `http://localhost:5000/fundraiser/ngo/${ngoId}/period/${period}`;
    const [fundraisers, setFundraisers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(getNGOEventsURI)
        .then((response) => {
            if (response.status === 200) {
                setFundraisers(response.data);
            }
        })
        .catch((error) => {
            console.log('Error in getting '+ period +' fundraiser :' + error);           
        });
    }, [fundraisers]);

    const onCardClickHandler = (id) => {
        navigate(`/ngo/fundraiser/${id}`);
    };

    return (
        <Container>
            <Row>
                <Col style={{ margin: '0.5rem 1.2rem' }}>
                    {
                        fundraisers.length === 0 && 
                        <span>No fundraisers to display</span>
                    }
                    {
                        fundraisers.length > 0 && 
                        <span>Showing all <strong>{fundraisers.length} {period}</strong> fundraiser(s)</span>
                    }
                    
                </Col>
            </Row>
            <Row>
                {fundraisers.map(fundraiser =>
                    <Col xs={12} md={12} key={fundraiser._id} style={{ margin: '0.6rem 1rem' }}>
                        <NGOFundraiserCard 
                            details={fundraiser}
                            period={period}
                            onCardClick={onCardClickHandler} 
                        />
                    </Col>
                )}
            </Row>   
        </Container>
    );

}