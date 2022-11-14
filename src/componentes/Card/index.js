import React from "react";
import './style.css'


function Card (props){
    return(
        <div className={props.style}>
                <div className={props.hover}></div>
        </div>
    );
};

export default Card;