import React from "react";
import menu from "../../../assets/menu.png";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <img src={menu} style={{ height: "26px", width: "26px" }} />
  </div>
);

export default drawerToggle;
