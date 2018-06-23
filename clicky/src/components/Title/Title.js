import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Title = props => (
  <nav className="title">
    <Link className="navbar-brand" to="/">
      Clicky
    </Link>
  </nav>
);

export default Title;
