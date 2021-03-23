import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card align-items-center">
        <img src={props.cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{props.updateTime}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
