/** @format */

import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      {/* <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/aboutus" prevLoc={props.prevLoc}>
        About Us
      </NavigationItem> */}
      <NavigationItem link="/guide">User Guide</NavigationItem>
      <NavigationItem link="/feedback">Feedback</NavigationItem>
      <Link to="/006014SD"></Link>
      <Link to="/TestZaika"></Link>
      <Link to="/TestDhaba"></Link>
      <Link to="/TestTaj"></Link>
    </ul>
  );
};

export default navigationItems;
