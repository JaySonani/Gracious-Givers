import classes from "./styles/NGOList.module.css";
import { useNavigate } from "react-router-dom";

const NGOList = (props) => {
    const navigate = useNavigate();

    const onShowDetailsHandler = () => {
        if (props.type === "approved") {
            navigate(`ngodetails/${props.id}`);
        }
        if (props.type === "event") {
            navigate(`${props.id}`);
        }
    };

    const type = props.type;

    return (
        <>
            <li className={classes.ngo}>
                <div>
                    <h5>{props.name}</h5>
                    {type === "event" && (
                        <div className={classes.eventNgo}>NGO: {props.ngo}</div>
                    )}
                    <div className={classes.description}>
                        {props.description}
                    </div>
                </div>
                <div>
                    <button onClick={onShowDetailsHandler}>Open</button>
                </div>
            </li>
        </>
    );
};

export default NGOList;
