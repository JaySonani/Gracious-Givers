import Card from "./Card";
import Footer from "../Footer";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import classes from "./FundraiserRequest.module.css";
import { useNavigate } from "react-router-dom";

const FundraiserRequest = () => {
    const [fundraiser, setFundraiser] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchFundraiser(id);
    }, [id]);

    async function onApproveHandler() {
        if (
            window.confirm(
                "Are you sure that you want to Approve this Request?"
            ) === true
        ) {
            await Axios.put(
                "http://localhost:5000/fundraiser/" + id + "/status/Active"
            )
                .then((response) => {
                    if (response.status === 200) {
                        window.alert("Request Approved!");
                        navigate(-1);
                    }
                })
                .catch((error) => {
                    console.log("Error in approving the request" + error);
                });
        } else {
            window.alert("Action aborted!");
        }
    }

    async function onRejectHandler() {
        if (
            window.confirm(
                "Are you sure that you want to Reject this Request?"
            ) === true
        ) {
            await Axios.put(
                "http://localhost:5000/fundraiser/" + id + "/status/Deactivated"
            )
                .then((response) => {
                    if (response.status === 200) {
                        window.alert("Request Rejected!");
                        navigate(-1);
                    }
                })
                .catch((error) => {
                    console.log("Error in rejecting the request" + error);
                });
        } else {
            window.alert("Action aborted!");
        }
    }

    async function fetchFundraiser(id) {
        await Axios.get("http://localhost:5000/fundraiser/" + id)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setFundraiser(response.data);
                }
            })
            .catch((error) => {
                console.log("Error in getting fundrasiers:" + error);
            });
    }

    return (
        <>
            {fundraiser && (
                <>
                    <Header admin={true} />
                    <main>
                        <section className={classes.event}>
                            <p>{fundraiser.title}</p>
                            <Card>
                                <div className={classes.content}>
                                    <img src={fundraiser.image} alt="" />
                                    <div>
                                        <h5>NGO: {fundraiser.createdBy}</h5>
                                        <h6>{" " + fundraiser.description}</h6>
                                        <h6>
                                            Cause:
                                            {" " + fundraiser.cause}
                                        </h6>
                                        <h6>
                                            Requested Active days:
                                            {" " + fundraiser.activeDays}
                                        </h6>
                                        <h5>
                                            Goal Amount: {fundraiser.currency}{" "}
                                            {fundraiser.goalAmount}
                                        </h5>
                                    </div>
                                </div>
                                <button onClick={onApproveHandler}>
                                    Approve
                                </button>
                                <button
                                    className={
                                        classes["custom-logout-btn-header"]
                                    }
                                    onClick={onRejectHandler}
                                >
                                    Reject
                                </button>
                            </Card>
                        </section>
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default FundraiserRequest;
