// Author: Viraj Jigar Shah (B00879448)

import ShowStoryComponent from "../../components/photo_gallery/ShowStoryComponent";
import ShowStoryUserComponent from "../../components/photo_gallery/ShowStoryUserComponent";
import * as StoryConstant from "../photo_gallery/StoryConstant"

export default function PictureGallery(props) {

    const ngoID = props.event.ngoId;
    const event = props.event;
    console.log(event)
    //const id = event._id;

    const ngoAuth = StoryConstant.getNgoId();
    //console.log(ngoAuth + " Viraj ")
    //console.log(event)

    //console.log(ngoID)
    return (
        <>
            {/* This is the PictureGallery for event. */}
            {ngoAuth === '' ? <ShowStoryUserComponent event={event} /> : <ShowStoryComponent event={event} />}
        </>
    );
}