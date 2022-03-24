import Footer from "../components/Footer";
import Header from "../components/Header";
import CreateEditFundraiserForm from "../components/fundrasier/CreateEditFundraiserForm";
import { useParams, useNavigate } from "react-router-dom";

export default function CreatUpdateFundraiser() {

    const navigate = useNavigate();
    let param = useParams();
    const paramEventId = param.id;

    let action;
    if (!paramEventId) {
        action = 'create';
    }
    else {
        action = 'update';
    }

    const onCreateSuccess = (fundraiser) => {
        console.log("Back to the parent form");
         // Add a pop here to show successful update
        // Navigate to a details page for NGO 
        navigate("/ngo/fundraiser");
    }

    const onUpdateSuccess = (fundraiser) => {
        console.log("Back to the parent form");
        // Add a pop here to show successful update
        navigate("/ngo/fundraiser");
    }

    return (
        <>
            <Header />
            {console.log("This is from function render : action :" + action)}
            {console.log("This is from function render : paramEventId :" + paramEventId)}
            <CreateEditFundraiserForm action={action} 
                                        fundraiserId={paramEventId} 
                                        onCreateSuccess={onCreateSuccess} 
                                        onUpdateSuccess={onUpdateSuccess}/>
            <Footer />
        </>
    );

}
