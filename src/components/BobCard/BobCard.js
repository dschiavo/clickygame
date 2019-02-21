import React from 'react';
import "./BobCard.css";

const BobCard = props => (
        
        <div className="card" onClick={props.imageClick}>
          <div className="img-container">
          
            <img alt={props.image} src={require("../../Images/" + props.image)} />
          </div>
        </div>
      );

export default BobCard;