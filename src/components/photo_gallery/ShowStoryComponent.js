// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid, } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as StoryContant from "./StoryConstant.js"
import { Row, Container, Col } from 'react-bootstrap';
import './style.css';

export default function ShowImage() {

    const [images, setImages] = useState([])
    const [ngoAuth, setNgoAuth] = useState("")
    const navigate = useNavigate();
    //const history = useHistory();


    useEffect(() => {
        // Update the document title using the browser API
        ImageElement();

    }, []);

    function ImageElement() {

        // const ngoAuth = StoryContant.getNgoId();
        // const setNgoAuth = ngoAuth;
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
    const onAddClickHandler = () => {
        console.log('incdsc')
        navigate(`/addImage`);
        //history.push('/addImage')
    };
    const onEditClickHandler = () => {
        navigate(`/editImage`);
        //  history.push('/editImage')
    };
    return (
        // <Grid container justifyContent="center" alignItems={'center'} >
        <Container>
            <Row className='justify-content-center'>
                <Col md={5}>
                    {
                        images.map((item, key) => (
                            <Row>
                                <img className='imageStyle'
                                    // style={width = '33.33%'; height= '33.33%';}
                                    src={item.image}
                                    // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <h3> {item.description} </h3>
                            </Row>
                        ))
                    }
                    {images && images.length === 0 &&
                        <p className='text-danger' > <b>No stories added </b> </p>
                    }
                </Col>
            </Row>
            {/* onClick={handleSubmit} */}
            <Row>
                <Col>
                    <Button variant="contained" onClick={onAddClickHandler}>
                        {/* <a href='http://localhost:3000/editImage'>Ngo Activity</a> */}
                        {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
                        Add Image
                    </Button>
                </Col>
                <Col className='text-right'>
                    <Button variant="contained" onClick={onEditClickHandler}>
                        {/* <a href='http://localhost:3000/editImage'>Ngo Activity</a> */}
                        {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
                        Edit Image
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}
