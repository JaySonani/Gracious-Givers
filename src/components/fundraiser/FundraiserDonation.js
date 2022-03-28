import { Card, ProgressBar } from "react-bootstrap";
import './styles/fundraiserDonation.css';
import * as FundraiserConstants from './FundraiserConstants';

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
                    <span style={{ fontWeight:600}}>
                        <small>Created By</small>
                    </span>
                    <br/>
                    <span>{event.createdBy}</span>                             
                </div>
                <div id='donationDetails'>                
                    <span style={{ fontWeight:600}}>
                        <small>Raised</small><br/>
                        <span style={{fontSize:'25px', fontWeight:'600', color:'rgb(3, 106, 166, 1)'}}>
                            {FundraiserConstants.currencyFormatting(event.currency, event.amountRaised, 0)}                            
                        </span>
                        &nbsp;of&nbsp;{FundraiserConstants.currencyFormatting(event.currency,event.goalAmount, 0)}
                        <ProgressBar now={progress} 
                            className="blue-progress-bar" 
                            style={{borderRadius: '19.5px', background:'rgb(170 207 232)', height:'20px', margin:'8px 0'}} />
                    </span>      
                    <div id='supporters-days-remaining'>
                        <span>
                        <span style={{fontSize:'1.2rem', fontWeight:700}}>{event.donors}</span>&nbsp;
                            supporters
                        </span><br/> 
                        <span>
                            <span style={{fontSize:'1.2rem', fontWeight:700}}>
                                {getDaysRemaining()}
                            </span>
                            &nbsp;days remaining                            
                        </span>  
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}