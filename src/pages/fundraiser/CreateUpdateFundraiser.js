import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import CreateEditFundraiserForm from "../../components/fundraiser/CreateEditFundraiserForm";
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

    const onCreateSuccess = (fundraiserId) => {
        navigate("/ngo/fundraiser");
    }

    const onUpdateSuccess = (fundraiserId) => {
        navigate("/ngo/fundraiser");
    }

    return (
        <>
            <Header />
            <CreateEditFundraiserForm action={action}
                fundraiserId={paramEventId}
                onCreateSuccess={onCreateSuccess}
                onUpdateSuccess={onUpdateSuccess} />
            <Footer />
        </>
    );

}
