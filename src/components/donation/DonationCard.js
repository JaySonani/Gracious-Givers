// Author: Jay Bhagvanbhai Sonani (B00891984)

import './styles/DonationCard.css';

const DonationCard = (props) => {
    return (
        <div className='donationCard'>
            <div className='donationAmount'>
                {`Amount $${props.amount}`}
            </div>
            <div className='donationContent'>
                By {props.name}
                <br />
                Email: {props.email}
                <br />

                <div className='donationDetails'>
                    {props.event_name}
                    <br />
                    Donated on: {props.time}
                </div>

            </div>
        </div>
    );
}

export default DonationCard;