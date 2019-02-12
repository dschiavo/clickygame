import React from 'react';
import "./BobCard.css";

const BobCard = props => (
    <div className="card" onClick={props.imageClick}>
    <div ClassName="img-container">
        <img alt={props.image} src={props.image} />
    </div>
    </div>
);

export default BobCard;