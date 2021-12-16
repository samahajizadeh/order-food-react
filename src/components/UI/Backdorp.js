import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop =(props)=>{
    const customClass = `${classes.backdrop}`
    return(<div className={customClass} onClick={props.close}>
        {props.children}
    </div>)
}
export default Backdrop;