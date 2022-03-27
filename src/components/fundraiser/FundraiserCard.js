import { Card, ProgressBar } from "react-bootstrap";
import "./styles/fundraiserCard.css";

export default function FundraiserCard(props) {

    const fundraiser = props.details;
    const onCardClick = props.onCardClick;
    const progress = ((fundraiser.amountRaised) / (fundraiser.goalAmount)) * 100;

    const getDaysRemaining = () => {
        let endDate = new Date(fundraiser.endDate);
        let timeDifference = endDate.getTime() - new Date().getTime();
        let daysRemaining = Math.round(timeDifference / (1000 * 60 * 60 * 24));
        return daysRemaining < 0 ? 0 : daysRemaining;
    }

    return (

        <Card className='card-custom' onClick={() => onCardClick(fundraiser.eventId)}>
            <Card.Img variant="top" src={fundraiser.image} />
            <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontWeight: '600' }}>{fundraiser.title}</Card.Title>
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
                                <strong>{getDaysRemaining()}</strong>
                                &nbsp;days remaining
                            </span>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}