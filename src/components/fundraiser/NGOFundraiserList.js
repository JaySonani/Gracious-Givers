import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import NGOFundraiserCard from "./NGOFundraiserCard";
import * as FundraiserConstants from "./FundraiserConstants";

export default function NGOFundraiserList(props) {

    const period = props.period;
    const [fundraisers, setFundraisers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {


        fetchFundrasiers();
    }, []);

    const fetchFundrasiers = () => {
        const ngoId = FundraiserConstants.getNgoId();
        const getNGOEventsURI = FundraiserConstants.apiBaseUrl + `/ngo/${ngoId}/period/${period}`;
        Axios.get(getNGOEventsURI)
            .then((response) => {
                if (response.status === 200) {
                    setFundraisers(response.data);
                }
            })
            .catch((error) => {
                console.log('Error in getting ' + period + ' fundraiser :' + error);
            });
    }

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
                            onActionSuccess={fetchFundrasiers}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );

}