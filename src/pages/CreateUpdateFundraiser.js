import Footer from "../components/Footer";
import Header from "../components/Header";
import CreateEditFundraiserForm from "../components/fundrasier/CreateEditFundraiserForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function CreatUpdateFundraiser() {

    const [action, setAction] = useState();
    const [fundrasier, setFundraiser] = useState([]);
    let param = useParams();
    const paramEventId = param.id;

    useEffect(() => {  
        if (!paramEventId) {
            setAction('create');
            console.log("Action is create"); 
        }
        else if (paramEventId !== null) {
            setAction('update');
            console.log("Action is update"); 
            const getFundraiserDetailsURI = `https://tutorial4-api.herokuapp.com/api/fundraiser/${paramEventId}`;
            Axios.get(getFundraiserDetailsURI)
            .then((response) => {
                if (response.status === 200 && response.data.status === true) {
                    setFundraiser(response.data.data);
                }
            })
            .catch((error) => {
                console.log('Error in getting details of the fundraiser :' + error);           
            });
        }
        
    }, []);


    return (
        <>
            <Header />
            <CreateEditFundraiserForm action={action} data={fundrasier} />
            <Footer />
        </>
    );

}
