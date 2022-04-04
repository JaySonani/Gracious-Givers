// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as StoryContant from "./StoryConstant.js"

export default function ShowImage() {

    const [images, setImages] = useState([])
    const [ngoAuth, setNgoAuth] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        // Update the document title using the browser API
        ImageElement();

    }, []);

    function ImageElement() {

        const ngoAuth = StoryContant.getNgoId();
        setNgoAuth = ngoAuth;
        //http://localhost:5000
        //https://gracious-givers-backend.herokuapp.com
        axios.get('http://localhost:5000/photoGallery/getFundraiserStory')//backend
            .then(function (response) {

                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onAddClickHandler = (id) => {
        navigate(`/addImage`);
    };
    const onEditClickHandler = (id) => {
        navigate(`/editImage`);
    };
    return (
        <Grid container justifyContent="center" alignItems={'center'} >
            {
                images.map((item, key) => (
                    <div>
                        <img
                            style={{ width: '35%', height: '35%', margin: '20px' }}
                            // style={width = '33.33%'; height= '33.33%';}
                            src={item.image}
                            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <h3> {item.description} </h3>
                        <br /><br />
                    </div>
                ))
            }
            <br /><br /><br />
            {/* onClick={handleSubmit} */}
            <Button variant="contained" component="span" margin='20px' onClick={onAddClickHandler}>
                {/* <a href='http://localhost:3000/editImage'>Ngo Activity</a> */}
                {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
                Add Image
            </Button><br /><br />
            <Button variant="contained" component="span" margin='20px' onClick={onEditClickHandler}>
                {/* <a href='http://localhost:3000/editImage'>Ngo Activity</a> */}
                {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
                Edit Image
            </Button><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Grid >
    )
}
