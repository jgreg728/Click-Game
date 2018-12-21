import React from "react";
import "./style.css";

function ClickCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
      <span className="remove" onClick={() => props.unfriend (props.id)}>𝘅</span>
    </div>
  );
}

export default ClickCard;
