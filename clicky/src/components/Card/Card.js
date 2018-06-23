import React from "react";
import "./Card.css"
const Card = props => (
    <div className="card">
        <div className="img-container"
        onClick={props.handleResults}
        >
            <img
                alt={props.name}
                src={props.src}
            />
        </div>
    </div>
)

export default Card;