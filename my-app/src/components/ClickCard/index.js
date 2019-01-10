import React from "react";
import "./style.css";

function ClickCard(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} 
        onClick={props.clickedCard}
        />
    </div>
  );
}

export default ClickCard;
