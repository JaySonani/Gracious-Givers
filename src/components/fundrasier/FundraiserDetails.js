import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EventImage from './event1001.jpg';
import PictureGallery from './PictureGallery';
import './styles/fundraiserDetails.css';

export default class FundraiserDetails extends React.Component {
    render() {
        const event = this.props.event;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 fundraiser-title'>
                        <span>{event.title}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' style={{margin:'10px 0px'}}>
                    <img src="/images/1647992149712.jpg"
                        // <img src="/images/164806290_Students_raising_hands_in_classroom_skynesher_Getty_Images.jpg"
                            className="img-fluid fundraiser-image" 
                            alt={event.title} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' >
                        <div className='tab-div'>
                            <Tabs defaultActiveKey="aboutFundraiser"                                  
                                    className="mb-3">
                                <Tab eventKey="aboutFundraiser" title="About Fundraiser" className="fundraiser-nav-link">
                                    <p className='tab-content'>{event.description}</p>
                                </Tab>
                                <Tab eventKey="updates" title="Updates">
                                    <PictureGallery eventId={event.eventId} />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
