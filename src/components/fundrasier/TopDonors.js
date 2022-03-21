import { Card, Table } from 'react-bootstrap';
import { FaDonate } from "react-icons/fa";
import './styles/topDonors.css';

export default function TopDonors (props) {

    const topDonors = props.donors.map((donor, index) => 
        <tr key={index}>
            <td align='left'>{donor.name}</td>
            <td align='right'>{donor.currency} {donor.amount}</td>
        </tr>
    );

    return ( 
        <Card className='card-custom'>
            <Card.Body className='card-body-color'>                
                <Card.Title className='top-donors-title'>
                    <strong>Top Donors</strong>
                    <div>
                        <FaDonate size='20px'
                            style={{ color: "black", fontSize: "20px", marginRight: "5px" }}/>
                    </div>        
                </Card.Title>
                <Card.Body>                                                          
                    <Table responsive>
                        <tbody>
                            {topDonors}
                        </tbody>
                    </Table>                    
                </Card.Body>
            </Card.Body>
        </Card>           
    );

}