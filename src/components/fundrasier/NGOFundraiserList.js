import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import NGOFundraiserCard from "./NGOFundraiserCard";

export default function NGOFundraiserList(props) {

    const period = props.period;
    // const ngoId = localStorage.getItem("ngoId");
    const ngoId = localStorage.getItem("ngo_id");
    const getFundraisersURI = `https://tutorial4-api.herokuapp.com/api/fundraiser/${ngoId}/${period}`;
    const [fundraiser1, setFundraisers] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     Axios.get(getFundraisersURI)
    //     .then((response) => {
    //         if (response.status === 200 && response.data.status === true) {
    //             setFundraisers(response.data.data);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('Error in getting '+ period +' fundraiser :' + error);           
    //     });
    // }, []);

    const fundraisers = [
        {
            eventId: 1001,
            title: 'Donation drive for ABC School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Smile Foundation',
            daysRemaining: 20,
            imageUrl: '',
            goalAmount: 20000,
            amountRaised: '0',
            currency: 'CAD',
            donors: '36',
            cause: 'Education',
            status: 'Completed',
            startDate: '2022-04-01',
            endDate: '2022-05-01'
        },
        {
            eventId: 1002,
            title: 'Donation drive for XYZ School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Smile Foundation',
            daysRemaining: 25,
            imageUrl: '',
            goalAmount: 50000,
            amountRaised: '2414',
            currency: 'CAD',
            donors: '45',
            cause: 'Education',
            status: 'Active',
            startDate: '2022-04-01',
            endDate: '2022-06-01'
        },
        {
            eventId: 1003,
            title: 'Donation drive for LNM School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Care Foundation',
            daysRemaining: 15,
            imageUrl: '',
            goalAmount: 70000,
            amountRaised: '34000',
            currency: 'CAD',
            donors: '76',
            cause: 'Education',
            status: 'Pending Admin Approval',
            startDate: '2022-04-01',
            endDate: '2022-07-01'
        },
        {
            eventId: 1004,
            title: 'Donation drive for PGH School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Care Foundation',
            daysRemaining: 15,
            imageUrl: '',
            goalAmount: 70000,
            amountRaised: '34000',
            currency: 'CAD',
            donors: '76',
            cause: 'Education',
            status: 'Deactivated',
            startDate: '2022-04-01',
            endDate: '2022-08-01'
        }
    ];

    const onCardClickHandler = (id) => {
        navigate(`/ngo/fundraiser/${id}`);
    };

    return (
        <Container>
            <Row>
                <Col style={{ margin: '0.5rem 1.2rem' }}>
                    Showing all <strong>{fundraisers.length} {period}</strong> fundraiser(s)
                </Col>
            </Row>
            <Row>
                {fundraisers.map(fundraiser =>
                    <Col xs={12} md={12} key={fundraiser.eventId} style={{ margin: '0.6rem 1rem' }}>
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