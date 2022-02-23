import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import './Label.css';

const Label = (props) => {

    let navigate = useNavigate();

    const changeRoute = () => navigate(props.path);

    return (
        <Nav.Link onClick={changeRoute} >
            {props.title}
        </Nav.Link>
    );
}

export default Label;