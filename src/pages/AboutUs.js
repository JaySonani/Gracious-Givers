// Author: Viraj Jigar Shah (B00879448)

import Footer from "../components/navbar/Footer";
import Header from "../components/navbar/Header";
import "./about.css"
import "./author.css"
import * as React from 'react';
import Image from "react-bootstrap/Image";
import Card from '@mui/material/Card';
// import classes from "./HomePage.module.css";
// import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import viraj from './viraj.jpg'
import fund from './Fund.png'
// import ListGroupItem from "react-bootstrap/ListGroupItem";
// import ListGroup from "react-bootstrap/ListGroup";

const AboutUs = () => {

    return (
        <div className="about">
            <Header />
            <div className="BGImage" style={{ backgroundImage: `url(${fund})` }} />
            <div className="content">
                <p>
                    <h3 style={{ textAlign: "center" }}>"Purpose"</h3>
                    There are many interested people out there who want to donate something towards a good cause.
                    Non-profit organizations are best option to help the needful people. NGOs organize various kinds of
                    fund-raiser events that let people donate to it. Sometimes, due to lack of advertisement or
                    less information, an interested person who wants to donate cannot find such an event that is
                    hosted by any NGOs. Out platform, Gracious Givers, tries to solve this problem by bridging the
                    gap between donors and fund-raiser event organizers. It is a one-stop app that will connect
                    donors directly with the NGO. Donors can visit the portal online and see the listing of ongoing
                    fund-raiser events. They can carefully identify the workflow of an NGO, the purpose of any event
                    and decide where they should donate their money. Furthermore, they can make payments of a donation
                    directly to any event as well as volunteer without leaving the portal.<br /><br /><br />
                    <h3 style={{ textAlign: "center" }}>"Goal"</h3>
                    “Donating made simplified” -
                    making the donations towards helping people as simple as possible
                    is the goal of our platform. Without wasting too much time in researching
                    where should I donate my money, is it a genuine organization or a fraud,
                    a donor should be able to donate with the peace in mind that their money
                    is going towards the one who need it.
                </p>
            </div>

            {/* <div>
                <h1 style={{ textAlign: "center" }}>Our Developers</h1>
            </div> */}
            {/* <div> */}

            {/* <div style={{ height: 300, width: 350, padding: 20, display: "flex" }}>
                    <Image
                        src=
                        {`${viraj}`}
                        roundedCircle
                        style={{ margin: 20 }}
                    >
                    </Image>
        
                </div> */}

            {/* <Image
                        src=
                        {`${viraj}`}
                        roundedCircle
                    />
                    <Image
                        src=
                        {`${viraj}`}
                        roundedCircle
                    />
                    <Image
                        src=
                        {`${viraj}`}
                        roundedCircle
                    />
                    <Image
                        src=
                        {`${viraj}`}
                        roundedCircle
                    /> */}
            {/* </div> */}
            {/* <ImageList sx={{ width: 300, height: 200, alignContent: "center" }}>
                    <ImageListItem>
                        <img
                            src={`${viraj}`}
                            srcSet={`${viraj}`}
                            alt={"Viraj"}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={"Viraj Jigar Shah"}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`${viraj}`}
                            srcSet={`${viraj}`}
                            alt={"Viraj"}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={"Viraj Jigar Shah"}
                        />
                    </ImageListItem>
                </ImageList> */}


            {/* <Card sx={{ maxWidth: 220, display: "flex" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${viraj}`}
                            alt="Viraj Jigar Shah"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Viraj Jigar Shah
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${viraj}`}
                            alt="Viraj Jigar Shah"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Viraj Jigar Shah
                            </Typography>
                        </CardContent>  
                    </CardActionArea>
                </Card> */}
            {/* <br /><br /><br />
            </div> */}
            <Footer />
        </div >
    );
}

export default AboutUs;