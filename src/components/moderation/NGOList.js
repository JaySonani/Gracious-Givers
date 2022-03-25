import classes from "./NGOList.module.css";

const NGOList = (props) => {
    return (
        <li className={classes.ngo}>
            <div>
                <h4>{props.name}</h4>
                <div className={classes.description}>{props.description}</div>
            </div>
            <div>
                <button>Details</button>
            </div>
        </li>
    );
};

export default NGOList;
