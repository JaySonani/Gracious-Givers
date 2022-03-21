import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import NGOFundraiserList from '../components/fundrasier/NGOFundraiserList';
import Header from '../components/Header';
import './styles/allFundraisers.css';

export default function NGOAllFundraisers() {

    const period = {
        past : "past",
        ongoing : "ongoing",
        future : "future"
    }

    return (
        <>  
            <Header />
                <Container className='mb-5 tab-div'>
                    <Row>
                        <Col xs={0} md={1}></Col>
                        <Col xs={12} md={10}>
                            <Tabs defaultActiveKey="ongoing" fill>
                                <Tab eventKey="past" title="Past">
                                    <NGOFundraiserList period={period.past} />
                                </Tab>
                                <Tab eventKey="ongoing" title="Ongoing">
                                    <NGOFundraiserList period={period.ongoing} />
                                </Tab>
                                <Tab eventKey="future" title="Future">
                                    <NGOFundraiserList period={period.future} />
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col xs={0} md={1}></Col>
                    </Row>
                </Container>
            <Footer />
        </>
    );

}