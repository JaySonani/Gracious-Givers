// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
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
        <Container>
            <Row className='justify-content-center'>
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
                                    <Button variant="contained" onClick={handleSubmit}>
                                        Delete Story
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                    {images && images.length === 0 &&
                        <p className='text-danger' > <b>No stories added </b> </p>
                    }
                </Col>
            </Row>
        </Container>
    )
}