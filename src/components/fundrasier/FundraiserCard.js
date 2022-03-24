import { Card, ProgressBar } from "react-bootstrap";
// import "./styles/fundraiserCard";
import "./styles/fundraiserDonation.css";
import EventImage from './event1001.jpg';

export default function FundraiserCard(props) {

    const fundraiser = props.details;
    const onCardClick = props.onCardClick;
    // const [fundraiser, onCardClick] = props;
    const progress = ((fundraiser.amountRaised) / (fundraiser.goalAmount)) * 100;

    return (

        <Card className='card-custom' onClick={() => onCardClick(fundraiser.eventId)}>
            <Card.Img variant="top" src={EventImage} />
            <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>{fundraiser.title}</Card.Title>
                <Card.Text>
                    <div id='createdDetails'>
                        <div>
                            <span>
                                <strong>Created By</strong>
                            </span>
                        </div>
                        <div><span>{fundraiser.createdBy}</span></div>
                    </div>
                    <div id='donationDetails'>
                        <div>
                            <span>Raised</span>
                            <div>
                                <span style={{ fontWeight: '800', color: 'rgb(3, 106, 166, 1)' }}>
                                    {fundraiser.currency} {fundraiser.amountRaised}  
                                    &nbsp;
                                </span>
                                <span>of {fundraiser.currency} {fundraiser.goalAmount}</span>
                            </div>
                            <ProgressBar now={progress}
                                className="blue-progress-bar"
                                style={{ borderRadius: '19.5px', background: 'rgb(170 207 232)', height: '20px', margin: '8px 0' }} />
                        </div>
                        <div id='supporters-days-remaining'>
                            <span>
                                <strong>{fundraiser.donors}</strong>
                                &nbsp;supporters<br />
                            </span>
                            <span>
                                <strong>{fundraiser.daysRemaining}</strong>
                                &nbsp;days remaining
                            </span>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}