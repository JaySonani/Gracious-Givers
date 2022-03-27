import './styles/DonationCard.css';

const DonationCard = () => {
    return (
        <div className='donationCard'>
            <div className='donationAmount'>
                Amount: $100
            </div>
            <div className='donationContent'>

                By Sam Browniie
                <br />
                Email: sam@browniie.ca
                <br />

                <div className='donationDetails'>
                    Event name
                    <br />
                    Donated on: March 24th, 2022
                </div>

            </div>
        </div>
    );
}

export default DonationCard;