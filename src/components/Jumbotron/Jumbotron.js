import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="dark-box mx-auto">
                <h1 className="display-4 text-center">Clicky React.js Game!</h1>
                <p className="lead text-center">Click on an image to earn points, but don't click on any image more than once!</p>
                <h3 className="text-center">Score: {props.score} | Top Score: {props.topScore}</h3>
                <h5 className="text-center">{props.message}</h5>
            </div>
        </div>
    </div>
);

export default Jumbotron;