import Footer from "../components/navbar/Footer";
import Header from "../components/navbar/Header";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
// import img from "./"

const AboutUs = () => {
    return (
        <div>
            <Header />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/Fund.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Footer />
        </div>
    );
}

export default AboutUs;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ActionAreaCard() {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="/static/images/cards/contemplative-reptile.jpg"
//                     alt="green iguana"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         Lizard
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000
//                         species, ranging across all continents except Antarctica
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }
