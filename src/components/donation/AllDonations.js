import Footer from "../Footer";
import Header from "../Header";
import DonationCard from "./DonationCard";
import './styles/AllDonations.css'


function AllDonation() {
    return (
        <div>
            <Header />
            <div className="rootDiv">

                <div className="donationTitle">
                    Donations made till now
                </div>
                <div className="allCards" >
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default AllDonation;