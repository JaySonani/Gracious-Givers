// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

export default function ShowImage() {

    const [images, setImages] = useState([])
    const [id, setID] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        console.log('in use effect !!')
        editImageElement();
    }, []);

    function handleSubmit(event) {

        var str = String(window.location.href);
        // //navigate(`/editImage`);
        if (str.includes('/editImage')) {
            window.location.reload(true)
        }
        else {
            navigate(`/editImage`);
        }

        console.log(window.location)
        //window.location.reload(true)
        //console.log('================================================')
        console.log('event ========== ' + event)
        console.log('id ============' + event._id)
        //console.log('================================================')
        // //setID(id);
        // const data = {
        //     id: id
        // }

        // console.log(event)
        // console.log(event.target)
        const form = new FormData()
        form.append("event", event)

        // console.log(form)
        //setImageId(id);
        // axios.post('http://localhost:5000/deleteImages', form)
        axios.post('http://localhost:5000/photoGallery/deleteFundraiserStory', form) //backend
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    function editImageElement() {

        axios.get('http://localhost:5000/photoGallery/getFundraiserStory') //backend
            .then(function (response) {
                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Box
            sx={{ display: "inline-flex", bgcolor: "Background.paper" }}>
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{ m: 3 }} >
                {images.map((item) => (
                    <>
                        <Grid item md={12} sm={12}>
                            <img
                                style={{ width: '35%', height: '35%', margin: '25px' }}
                                // style={width = '33.33%'; height= '33.33%';}
                                src={item.image}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item md={8} sm={12}>
                            <h3> {item.description} </h3>
                        </Grid>
                        <Grid item md={8} sm={12}>
                            {/* <Button variant="contained" component="span" margin='20px' onClick={handleSubmit(item._id)}>
                                Delete Story
                            </Button> */}
                            <Button variant="contained" component="span" onClick={() => { handleSubmit(item._id) }}>
                                Delete<a href='http://localhost:3000/editImage'></a>
                                {/* frontend */}
                            </Button>
                        </Grid>
                        {/* <Grid item md={8} sm={12}>
                            <Button variant="contained" component="span" onClick={() => { handleSubmit(item._id) }}>
                                Home Page
                                {/* frontend */}
                        {/* </Button>
                        </Grid> */}
                    </>
                ))
                }
            </Grid >
        </Box >
    )
}