import React from "react";

import resto from "../../../assets/logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={resto} alt="logo" />
  </div>
);

export default logo;
