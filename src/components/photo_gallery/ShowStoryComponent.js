import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';

export default function ShowImage() {

    const [images, setImages] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        ImageElement();
    }, []);

    function handleSubmit() {

    }
    function ImageElement() {

        axios.get('https://gracious-givers-backend.herokuapp.com/showImages')//backend
            .then(function (response) {

                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // const Input = styled('input')({
    //     display: 'none',
    // });
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
            <Button variant="contained" component="span" margin='20px' >
                <a href='http://localhost:3000/editImage'>Ngo Activity</a>
                {/* https://gracious-givers-frontend-web.herokuapp.com/ frontend */}
            </Button><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Grid >
    )
}
