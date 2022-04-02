import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import axios from 'axios';

export default function ShowImage() {

    const [images, setImages] = useState([])
    const [id, setID] = useState('')

    useEffect(() => {
        editImageElement();
        //console.log('in use effect !!')
    }, []);

    function handleSubmit(event) {

        console.log('================================================')
        console.log(event)
        //console.log(event._id)
        console.log('================================================')
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

        axios.get('http://localhost:5000/photoGallery/updateFundraiserStory') //backend
            .then(function (response) {
                console.log(response);
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Grid container justifyContent="center" alignItems={'center'} >
            {
                images.map((item) => (
                    <div>
                        <img
                            style={{ width: '35%', height: '35%', margin: '25px' }}
                            // style={width = '33.33%'; height= '33.33%';}
                            src={item.image}
                            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <h3> {item.description} </h3>
                        <Button variant="contained" component="span" onClick={() => { handleSubmit(item._id) }}>
                            <a href='http://localhost:3000/editImage'>Delete</a>
                            {/* frontend */}
                        </Button><br /><br /><br /><br />
                    </div>
                ))
            }
        </Grid >
    )
}
