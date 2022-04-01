import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ImageElement from './AddStoryElement';

export default function AddImage() {
    const Input = styled('input')({
        display: 'none',
    });
    return (
        // <div align='center'>
        // <Box sx={{bgcolor: '#b2ebf2' ,m: 3,boxShadow:1,boxRadius:2, width:'90%'}}>
        //     <Grid container alignItems= 'center' sx ={{width:'100%', m:2}}>
        //         <Grid item md={11} sm={11} >
        //             <Typography variant="h2" gutterbottom sx={{mt:2}}>NGO_NAME</Typography>
        //         </Grid>
        //         <Grid item md={8} sm={11}>
        //             <Typography variant="h5">NGO_NAME</Typography>
        //         </Grid>
        //         <Grid item>
        //         <label htmlFor="contained-button-file">
        //             <Input accept="image/*" id="contained-button-file" multiple type="file" />
        //                 <Button variant="contained" component="span">
        //                     Upload
        //                 </Button>
        //         </label>      
        //         </Grid>
        //     </Grid>
        // </Box>
        // </div>
        <div id="container" align="center">
            <Grid sx={{ m: 2, mt: 6 }}>
                <ImageElement />
            </Grid>
            {/* <Grid item>
    <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
                Upload
            </Button>
        </label>      
    </Grid> */}
        </div>
    )
}
