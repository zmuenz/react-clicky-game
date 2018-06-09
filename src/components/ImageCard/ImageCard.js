import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <a onClick={() => props.handleClick(props.name)}>
      <img className="card-img-top" alt={props.name} src={require(`../../images/${props.name}.jpg`)} />
    </a>
  </div>
);

export default ImageCard;
