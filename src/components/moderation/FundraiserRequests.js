import Footer from "../Footer";
import Header from "../Header";
import Card from "./Card";
import NGOList from "./NGOList";
import classes from "./FundraiserRequests.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const FundraiserRequests = (props) => {
    const [fundraisers, setFundraisers] = useState([]);

    useEffect(() => {
        if (props.all) {
            fetchAllFundraisers();
        } else {
            fetchPendingFundraisers();
        }
    }, [props.all]);

    async function fetchPendingFundraisers() {
        // const getFundraisersByCauseUrl =
        //     FundrasierConstants.apiBaseUrl + `/cause/${selectedCause}`;
        await Axios.get("http://localhost:5000/fundraiser/pending")
            .then((response) => {
                if (response.status === 200) {
                    setFundraisers(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log("Error in getting fundrasiers:" + error);
            });
    }

    async function fetchAllFundraisers() {
        await Axios.get("http://localhost:5000/fundraiser/cause/All")
            .then((response) => {
                if (response.status === 200) {
                    setFundraisers(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log("Error in getting fundrasiers:" + error);
            });
    }

    let list;
    fundraisers &&
        (list = fundraisers.map((event) => {
            return (
                <NGOList
                    type={"event"}
                    id={event._id}
                    name={event.title}
                    key={event._id}
                    description={event.description}
                    ngo={event.createdBy}
                />
            );
        }));
    return (
        <>
            <Header admin={true} />
            <main>
                <section className={classes.event}>
                    {list && (
                        <>
                            {!props.all && <p>Fundraiser Requests</p>}
                            {props.all && <p>Active Fundraisers</p>}
                            <Card>
                                <ul>{list}</ul>
                            </Card>
                        </>
                    )}
                    {!list && <p>No New Fundraiser Requests</p>}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FundraiserRequests;
