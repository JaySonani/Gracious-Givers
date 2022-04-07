// Author: Viraj Jigar Shah (B00879448)

import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as StoryContant from "./StoryConstant.js"

export default function ShowImage() {

    const [images, setImages] = useState([])
    //    const [ngoAuth, setNgoAuth] = useState("")
    const navigate = useNavigate();

    // console.log("+++++++++++++++++++++++++++++++++++++++++")
    // console.log(props.event)
    // console.log("+++++++++++++++++++++++++++++++++++++++++  ")
    // console.log(props.event._id)

    useEffect(() => {
        // Update the document title using the browser API
        ImageElement();

    }, []);

    function ImageElement() {

        const ngoAuth = StoryContant.getNgoId();
        const setNgoAuth = ngoAuth;
        // const FEvent = props._id;
        //http://localhost:5000
        //https://gracious-givers-backend.herokuapp.com
        axios.get('https://gracious-givers-backend.herokuapp.com/photoGallery/getFundraiserStory')//backend
            .then(function (response) {

                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onClickHandler = () => {
        navigate(`/`);
    };
    return (
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

            {/* <Grid item md={8}>
                <Button variant="contained" sx={{ m: 1 }} onClick={onClickHandler}>
                    Home Page
                </Button>
            </Grid> */}
        </Grid>

        // <Grid container justifyContent="center" alignItems={'center'} >
        //     {    
        //         images.map((item, key) => (
        //             <div>   
        //                 <img
        //                     style={{ width: '35%', height: '35%', margin: '20px' }}
        //                     // style={width = '33.33%'; height= '33.33%';}
        //                     src={item.image}
        //                     // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //                     alt={item.title}
        //                     loading="lazy"
        //                 />
        //                 <h3> {item.description} </h3>
        //                 <br /><br />
        //             </div>
        //         ))
        //     }
        //     <br /><br /><br />
        //     {/* onClick={handleSubmit} */}
        //     <Button variant="contained" component="span" margin='20px' onClick={onClickHandler}>
        //         {/* <a href='http://localhost:3000/editImage'>Ngo Activity</a> */}
        //         {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
        //         Home Page
        //     </Button><br /><br />
        // </Grid >
    )
}
