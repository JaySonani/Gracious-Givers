import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function ImageElement() {
    var target = new Array();
    const [selectedFile, setSelectedFile] = useState("");
    const [desc, setDesc] = useState("");
    const [missingDoc, setMissingDoc] = useState("");
    const handleSubmit = () => {

        // console.log(desc)
        // console.log(selectedFile)
        // console.log(desc.length)
        // console.log(selectedFile)
        if (desc.length == 0 || selectedFile == '') {
            setMissingDoc('Please add content or image')
        }
        else {

            const form = new FormData()
            form.append("NGOStory", selectedFile)
            form.append("desc", desc)

            console.log('=====================')
            console.log(form)
            console.log('=====================')
            console.log(selectedFile)
            console.log('=====================')
            console.log(desc)

            axios.post('http://localhost:5000/photoGallery/addFundraiserStory', form)//backend
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    const handleChange = (event) => {

        setDesc(event.target.value)
    };

    const handleCapture = (event) => {

        //var path = URL.createObjectURL(event.target.files[0]
        var path = event.target.files[0].name
        setSelectedFile(event.target.files[0])
    };

    return (
        <div align="center">
            <Card sx={{ width: "60%", height: "40%" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            NGO_NAME
                        </Typography>
                        <Typography sx={{ p: 1 }} variant="body2" color="text.secondary">
                            Fund Raiser Event
                        </Typography>
                        <TextField
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            fullWidth
                            rows={4}
                            variant="filled"
                            onChange={handleChange}
                        />
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                    <label htmlFor="contained-button-file">
                        <input accept="image/*" name="image" id="contained-button-file" multiple type="file" onChange={handleCapture} />

                        {/* <FileBase type='file' ></FileBase> */}
                        {/* <Button variant="contained" component="span" >
          Upload
        </Button> */}
                    </label>
                    <Button variant="contained" component="span" onClick={handleSubmit}>
                        Upload
                    </Button>
                </CardActions>
                <CardActions style={{ justifyContent: "center", color: 'red', fontWeight: 'bold' }}>
                    <p><h3>{missingDoc}</h3></p>
                </CardActions>
            </Card><br /><br /><br />
            <Button variant="contained" component="span">
                <a href='http://localhost:3000/showImage'>Submit</a>
                {/* frontend */}
            </Button><br />
        </div>
    )
}

export default ImageElement