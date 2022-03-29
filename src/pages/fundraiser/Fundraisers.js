import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import FundraiserDetails from '../../components/fundraiser/FundraiserDetails';
import FundraiserDonation from '../../components/fundraiser/FundraiserDonation';
import TopDonors from '../../components/fundraiser/TopDonors';
import { Button } from 'react-bootstrap';
import { BiDonateHeart } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as FundraiserConstants from "../../components/fundraiser/FundraiserConstants";
import Axios from "axios";
import './styles/fundraisers.css';

export default function FundRaisers() {

    let eventParam = useParams();
    const eventId = eventParam.id;
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    const [topDonors, setTopDonors] = useState([]);
    const getFundraiserDetailsURI = FundraiserConstants.apiBaseUrl + `/${eventId}`;
    // const getTopDonorsURI = `https://gracious-givers-backend.herokuapp.com/donation/topdonors/${eventId}`;
    const getTopDonorsURI = `https://gracious-givers-backend.herokuapp.com/donation/topdonors/${eventId}`;

    console.log(getTopDonorsURI);

    useEffect(() => {
        console.log("The get URL is " + getFundraiserDetailsURI);
        Axios.get(getFundraiserDetailsURI)
            .then((response) => {
                if (response.status === 200) {
                    setEvent(response.data);
                }
            })
            .catch((error) => {
                console.log('Error in getting details of the fundraiser :' + error);
            });

        // This is to be developed in the Donations feature 
        Axios.get(getTopDonorsURI)
            .then((response) => {
                console.log(getTopDonorsURI);
                if (response.status === 200 && response.data.success === true) {
                    console.log(response.data.donations);
                    setTopDonors(response.data.donations);
                }
            })
            .catch((error) => {
                console.log('Error in getting details of the fundraiser :' + error);
            });

    }, []);

    return (
        <>
            <Header />
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-8' style={{ margin: '10px 0px' }}>
                        <FundraiserDetails event={event} />
                    </div>
                    <div className='col-md-4'>
                        <div className='row' style={{ margin: '50px 0px' }}>
                            <div className='col-12'>
                                <div className='support-now'>
                                    <Button variant="primary" className="custom-btn" onClick={() => navigate("/donation", { state: { id: event._id, name: event.title } })}>
                                        Donate Now
                                        <BiDonateHeart style={{ marginLeft: '10px', marginBottom: '7px' }} />
                                    </Button>
                                </div>
                                <FundraiserDonation event={event} />
                            </div>
                        </div>
                        <div className='row' style={{ margin: '50px 0' }}>
                            <div className='col-12'>
                                <TopDonors donors={topDonors} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}



