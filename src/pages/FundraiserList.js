import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import FundraiserCard from '../components/fundrasier/FundraiserCard.js';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function FundraiserList() {

    const defaultCause = 'All';
    const [cause, setCause] = useState(defaultCause);
    const [fundraiser1, setFundraisers] = useState([]);
    const navigate = useNavigate();

    // render new fundrasiers whenever the selected cause changes 
    // useEffect(() => {
    //     fetchFundraisers()
    // }, []);

    async function fetchFundraisers(selectedCause) {

        const getFundraisersURI = `https://tutorial4-api.herokuapp.com/api/fundraiser/cause/${selectedCause}`;
        console.log("Fetching fundrasier for cause : " + selectedCause);
        console.log("URI : " + selectedCause);
        await Axios.get(getFundraisersURI)
            .then(response => {
                if (response.status === 200) {
                    setFundraisers(response.data.data);
                }
            })
            .catch(error => {
                console.log('Error in getting fundrasiers :' + error);
            });
    }

    const handleCauseSelect = (event) => {
        const selectedCause = event;
        console.log("Selected Cause value : " + event);
        setCause(selectedCause);
        fetchFundraisers(selectedCause);
    }

    const onCardClickHandler = (id) => {
        navigate(`/fundraiser/${id}`);
    };

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
            status: 'Active'
        },
        {
            eventId: 1002,
            title: 'Donation drive for XYZ School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Children Foundation',
            daysRemaining: 25,
            imageUrl: '',
            goalAmount: 50000,
            amountRaised: '2414',
            currency: 'CAD',
            donors: '45',
            cause: 'Education',
            status: 'Active'
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
            status: 'Active'
        },
        {
            eventId: 1004,
            title: 'Donation drive for JKP School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Win Foundation',
            daysRemaining: 15,
            imageUrl: '',
            goalAmount: 70000,
            amountRaised: '64023',
            currency: 'CAD',
            donors: '76',
            cause: 'Education',
            status: 'Active'
        },
        {
            eventId: 1005,
            title: 'Donation drive for JKP School children',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
            createdBy: 'Win Foundation',
            daysRemaining: 15,
            imageUrl: '',
            goalAmount: 70000,
            amountRaised: '3400',
            currency: 'CAD',
            donors: '76',
            cause: 'Education',
            status: 'Active'
        }
    ];

    const causes = [
        'All',
        'Education',
        'Environment',
        'Animal Welfare',
    ];

    return (
        <>
            <Header />
            <Container className='mb-5'>
                <Row className='mb-5' style={{ margin: '0.5rem 0' }}>
                    <Col xs={0} md={1} />
                    <Col xs={12} md={10}>
                        <Row id=''>
                            <Col xs={5} md={2}>
                                Search By Cause
                            </Col>
                            <Col xs={7} md={10}>
                                <DropdownButton id="causes-dropdown"
                                    title={cause}
                                    onSelect={handleCauseSelect}>
                                    {causes.map(cause =>
                                        <Dropdown.Item key={cause} eventKey={cause}>
                                            {cause}
                                        </Dropdown.Item>
                                    )}
                                </DropdownButton>
                            </Col>
                        </Row>
                        <Row>
                            {fundraisers.map(fundrasier =>
                                <Col key={fundrasier.eventId} xs={12} md={4}
                                    style={{ margin: '0.6rem 0' }} >
                                    <FundraiserCard details={fundrasier}
                                        onCardClick={onCardClickHandler}
                                    />
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col xs={0} md={1} />
                </Row>
            </Container>
            <Footer />
        </>
    );

}