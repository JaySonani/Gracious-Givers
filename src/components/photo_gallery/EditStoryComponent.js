// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import { Box, textAlign } from '@mui/system';
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
        //navigate(`/editImage`);
        if (str.includes('/editImage')) {
            window.location.reload(true)
        }
        else {
            navigate(`/editImage`);
        }

        //console.log(window.location)
        //window.location.reload(true)
        //console.log('================================================')
        //console.log('event ========== ' + event)
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
        axios.post('https://gracious-givers-backend.herokuapp.com/photoGallery/deleteFundraiserStory', form) //backend http://localhost:5000/photoGallery/deleteFundraiserStory
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    function editImageElement() {

        axios.get('https://gracious-givers-backend.herokuapp.com/photoGallery/getFundraiserStory') //backend   http://localhost:5000/photoGallery/getFundraiserStory


            .then(function (response) {
                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Container>
            <Row className='justify-content-center'>
                <h2 className='text-center'> <b>Helping stray souls in need</b></h2>
                <h2 className='text-center'> Delete stories from here </h2>
                <Col md={6}>
                    <ul className='uuid'>
                        {
                            images.map((item, key) => (
                                <li key={key} className='text-center'>
                                    <img className='imageStyle'
                                        // style={width = '33.33%'; height= '33.33%';}
                                        src={item.image}
                                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <h3 className='text-center'> {item.description} </h3>
                                    <Button variant="contained" component="span" onClick={() => { handleSubmit(item._id) }}> {/*onClick={handleSubmit(item._id)} */}
                                        Delete Story {/* <a href='http://localhost:3000/editImage'></a> */}
                                    </Button>
                                    <br /><br />
                                </li>
                            ))
                        }
                    </ul>
                    {images && images.length === 0 &&
                        <p className='text-danger' style={{ textAlign: "center" }}> <h2><b>No stories Updated </b> </h2> </p>
                    }
                </Col>
                <br /><br /><br />
            </Row>
            <br /><br />
        </Container >
    )
}