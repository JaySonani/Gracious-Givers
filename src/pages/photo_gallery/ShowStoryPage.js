// Author: Viraj Jigar Shah (B00879448)

import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import ShowStoryComponent from "../../components/photo_gallery/ShowStoryComponent";
import { useNavigate } from "react-router-dom";
import * as StoryConstant from "../../components/photo_gallery/StoryConstant"

const ShowStoryPage = () => {

    const ngoAuth = StoryConstant.getNgoId();
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {ngoAuth.length > 0 ? <ShowStoryComponent /> : <ShowStoryUserComponent />}
            <Footer />
        </div>
    );
}

export default ShowStoryPage;