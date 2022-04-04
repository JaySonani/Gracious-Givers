// Author: Viraj Jigar Shah (B00879448)

import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import ShowStoryComponent from "../../components/photo_gallery/ShowStoryComponent";
import { useNavigate } from "react-router-dom";

const ShowStoryPage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <ShowStoryComponent />
            <Footer />
        </div>
    );
}

export default ShowStoryPage;