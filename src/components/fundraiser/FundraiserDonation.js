import { Card, ProgressBar } from "react-bootstrap";
import './styles/fundraiserDonation.css';

export default function FundraiserDonation(props) {

    const event = props.event;
    const progress = ((props.event.amountRaised) / (props.event.goalAmount)) * 100;

    // Need to cite this https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    const getDaysRemaining = () => {
        let endDate = new Date(event.endDate);
        let timeDifference = endDate.getTime() - new Date().getTime();
        let daysRemaining = Math.round(timeDifference / (1000 * 60 * 60 * 24));
        return daysRemaining; 
    }

    return (
        <Card className='card-custom' id='fundraiser-donation-details'>
            <Card.Body className='card-body-color'>
                <div id='createdDetails'>               
                    <span style={{fontSize:'20px'}}>
                        <strong>Created By</strong>
                    </span>
                    <br/>
                    <span>{event.createdBy}</span>                             
                </div>
                <div id='donationDetails'>                
                    <span>
                        Raised<br/>
                        <span style={{fontSize:'25px', fontWeight:'600', color:'rgb(3, 106, 166, 1)'}}>
                            {event.currency} {event.amountRaised} 
                        </span>
                        &nbsp;of {event.currency} {event.goalAmount}
                        <ProgressBar now={progress} 
                            className="blue-progress-bar" 
                            style={{borderRadius: '19.5px', background:'rgb(170 207 232)', height:'20px', margin:'8px 0'}} />
                    </span>      
                    <div id='supporters-days-remaining'>
                        <span>
                            <strong style={{fontSize:'20px'}}>{event.donors}</strong>&nbsp;
                            supporters
                        </span><br/> 
                        <span>
                            <strong style={{fontSize:'20px'}}>{getDaysRemaining()}</strong>
                            &nbsp;days remaining
                        </span>  
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}