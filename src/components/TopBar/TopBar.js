import React from "react";
import "./TopBar.css";

const TopBar = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <span className="navbar-brand text-white" href="/">Clicky Game!</span>
            </div>
        </nav>
    </div>
);

export default TopBar;