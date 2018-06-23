import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";


const Title = props => (

  <header className="title">
    <Link className="navbar-brand" to="/">
      <h1>Clicky Game</h1>
    </Link>
    <h1></h1>
    <h1 className="score"> Score: {props.winCount} </h1>
  </header>
);

export default Title;