import React from "react";
import "./Card.css"
const Card = props => (
    <div className="card">
        <div className="img-container">
            <img
                alt={props.name}
                src={props.src}
                onClick={props.onClick}
            />
        </div>
    </div>
)

export default Card;