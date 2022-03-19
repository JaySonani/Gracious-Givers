import Footer from "../components/Footer";
import Header from "../components/Header";
import FundraiserDetails from '../components/fundrasier/FundraiserDetails';
import FundraiserDonation from '../components/fundrasier/FundraiserDonation.js';
import TopDonors from '../components/fundrasier/TopDonors.js';
import { Button } from 'react-bootstrap';
import { BiDonateHeart } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import './styles/fundraisers.css';

export default function FundRaisers() {

    let eventParam = useParams();
    const eventId = eventParam.id;
    const navigate = useNavigate();  
    const [event1, setEvent] = useState({});
    const [topDonors1, setTopDonors] = useState({});
    const getFundraiserDetailsURI = `https://tutorial4-api.herokuapp.com/api/fundraiser/${eventId}`;
    const getTopDonorsURI = `https://tutorial4-api.herokuapp.com/api/donors/${eventId}`;

    // useEffect(() => {
    //     Axios.get(getFundraiserDetailsURI)
    //     .then((response) => {
    //         if (response.status === 200 && response.data.status === true) {
    //             setEvent(response.data.data);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('Error in getting details of the fundraiser :' + error);           
    //     });

    //     Axios.get(getTopDonorsURI)
    //     .then((response) => {
    //         if (response.status === 200 && response.data.status === true) {
    //             setTopDonors(response.data.data);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('Error in getting details of the fundraiser :' + error);           
    //     });

    // }, []);

    const event = {
        eventId: 1001,
        title: 'Donation drive for ABC School children',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
        createdBy: 'Smile Foundation',
        daysRemaining: 20,
        imageUrl: '',
        goalAmount: 10000,
        amountRaised: '2510',
        currency: 'CAD',
        donors: '36',
    }

    const topDonors = [{
        name: 'Alan',
        amount: 145,
        currency: 'CAD',
    }, 
    {
        name: 'Monica',
        amount: 100,
        currency: 'CAD',
    }, 
    {
        name: 'Marsie',
        amount: 160,
        currency: 'CAD',
    }
    ];
    
    return(
        <>
            <Header/>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-md-8' style={{margin:'10px 0px'}}>
                            <FundraiserDetails event={event} />
                        </div>
                        <div className='col-md-4'>
                            <div className='row' style={{margin:'50px 0px'}}>
                                <div className='col-12'>                            
                                    <div className='support-now'>
                                        <Button variant="primary" className="custom-btn">
                                            Donate Now 
                                            <BiDonateHeart style={{marginLeft:'10px', marginBottom:'7px'}} />
                                        </Button>
                                    </div>
                                    <FundraiserDonation event={event} />                            
                                </div>
                            </div>
                            <div className='row' style={{margin:'50px 0'}}>
                                <div className='col-12'>                            
                                    <TopDonors donors={topDonors} />                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            <Footer/>
        </>
    );
}



