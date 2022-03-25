import classes from "./NGOList.module.css";
import { useNavigate } from "react-router-dom";

const NGOList = (props) => {
    const navigate = useNavigate();
    const onShowDetailsHandler = () => {
        navigate(`ngodetails/${props.id}`);
    };

    return (
        <li className={classes.ngo}>
            <div>
                <h4>{props.name}</h4>
                <div className={classes.description}>{props.description}</div>
            </div>
            <div>
                <button onClick={onShowDetailsHandler}>Details</button>
            </div>
        </li>
    );
};

export default NGOList;
