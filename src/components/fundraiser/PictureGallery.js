import ShowStoryComponent from "../../components/photo_gallery/ShowStoryComponent";
import ShowStoryUserComponent from "../../components/photo_gallery/ShowStoryUserComponent";
import * as StoryConstant from "../photo_gallery/StoryConstant"

export default function PictureGallery(props) {

    const event = props.event.ngoId;
    console.log(props.event)
    //const id = event._id;

    const ngoAuth = StoryConstant.getNgoId();
    console.log(ngoAuth + " Viraj ")

    console.log(event + " ======================= ")
    return (
        <>
            {/* This is the PictureGallery for event. */}
            {ngoAuth === '' ? <ShowStoryUserComponent /> : <ShowStoryComponent />}
        </>
    );
}