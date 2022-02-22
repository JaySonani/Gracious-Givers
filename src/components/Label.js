import { useNavigate } from 'react-router-dom';
import './Label.css';

const Label = (props) => {

    let navigate = useNavigate();

    const changeRoute = () => {
        navigate(props.path);
    }


    return (
        <div className="Label" onClick={changeRoute}>
            {props.title}
        </div>
    );
}

export default Label;