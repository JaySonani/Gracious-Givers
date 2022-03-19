import Footer from "../components/Footer";
import Header from "../components/Header";
import CreateEditFundraiserForm from "../components/fundrasier/CreateEditFundraiserForm";
import { useParams } from "react-router-dom";

export default function CreatUpdateFundraiser() {

    let param = useParams();
    const paramEventId = param.id;

    let action;
    if (!paramEventId) {
        action = 'create';
    }
    else {
        action = 'update';
    }

    return (
        <>
            <Header />
            {console.log("This is from function render : action :" + action)}
            {console.log("This is from function render : paramEventId :" + paramEventId)}
            <CreateEditFundraiserForm action={action} 
                                        fundraiserId={paramEventId} />
            <Footer />
        </>
    );

}
