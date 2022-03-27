import { useState } from "react";
import { useEffect } from "react";
import DonationCard from "../../components/donation/DonationCard";
import './styles/AllDonations.css';
const axios = require('axios');


function AllDonation() {

    const [donations, setDonations] = useState([]);

    useEffect(() => {

        const retrieveAllDonations = () => {
            var config = {
                method: 'get',
                url: 'https://gracious-givers-backend.herokuapp.com/donation/alldonations',
                headers: {}
            };
            axios(config)
                .then(function (response) {
                    setDonations(response.data.donations);
                    // console.log(response.data.donations);
                    // console.log(donations);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


        retrieveAllDonations();
        console.log("All donations are retrieved..")
        // console.log(donations);
    }, []);



    return (
        <div>
            {/* <Header /> */}
            <div className="rootDiv">

                <div className="donationTitle">
                    Donations made till now
                </div>
                <div className="allCards" >

                    {
                        donations.map((item, index) => {
                            // console.log(item);
                            return (
                                // <p>Hello</p>
                                <DonationCard key={index.toString()} amount={item.donation_amount} name={item.donor_firstname + ' ' + item.donor_lastname} email={item.donor_email} event_name="ABC" time={item.createdAt} />
                            )
                        })
                    }



                </div>

            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default AllDonation;