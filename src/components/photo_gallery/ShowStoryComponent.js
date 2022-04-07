// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid, } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as StoryContant from "./StoryConstant.js"
import { Row, Container, Col } from 'react-bootstrap';
import './style.css';

export default function ShowImage(props) {

    const [images, setImages] = useState([])
    const [ngoAuth, setNgoAuth] = useState("")
    const navigate = useNavigate();

    console.log("++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(props.event)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(props.event._id)

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
        navigate(`/addImage`, props.event);
        //history.push('/addImage')
    };
    const onEditClickHandler = () => {
        navigate(`/editImage`, props.event);
        //  history.push('/editImage')
    };
    return (
        // <Grid container justifyContent="center" alignItems={'center'} >
        // <Container>
        //     <Row>  {/*className='justify-content-center' */}
        <Grid container alignItems={'center'} justifyContent={'center'}>
            {/* <Col sx={{}} md={6}> */}
            <ul className='uuid'>

                {
                    images.map((item, key) => (
                        <li key={key} className='text-center'>
                            <div >
                                <Grid item>
                                    <img className='imageStyle'
                                        // style={width = '33.33%'; height= '33.33%';}
                                        src={item.image}
                                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    /></Grid>

                            </div>
                            <Grid item>
                                <h3 className='text-center'> {item.description} </h3>
                            </Grid>
                        </li>
                    ))
                }
            </ul>
            {images && images.length === 0 &&
                <p className='text-danger' > <b>No stories added </b> </p>
            }

            <Grid item>            {/* onClick={handleSubmit} */}
                {/* <Row>
                    <Col> */}
                <Button variant="contained" sx={{ m: 1 }} onClick={onAddClickHandler}>
                    Add Story
                </Button>
                {/* </Col>
                    <Col className='edit-btn'> */}
                <Button variant="contained" sx={{ m: 1, color: 'white' }} onClick={onEditClickHandler}>
                    Edit Story
                </Button>
            </Grid>

            {/* </Col>
                </Row> */}
            {/* </Grid> */}
            {/* </Col> */}
        </Grid>

    )
}
{/* </Row>

        </Container> */}