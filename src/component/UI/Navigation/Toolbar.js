/** @format */

import React, { useState } from "react";

import classes from "./Toolbar.module.css";
import NavigationItems from "./NavigationItems";
import DrawerToggle from "./DrawerToggle";
import HeaderCartButton from "../../Cart/HeaderCartButton";
import filterImage from "../../../assets/filterr.png";

const Toolbar = (props) => {
  const [showfilter, setShowfilter] = useState(false);
  const optionClick = () => {
    setShowfilter(!showfilter);
  };
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        {/* <Logo /> */}
        <HeaderCartButton onClick={props.onClick} onOption={showfilter} />
      </div>
      <img
        src={filterImage}
        alt="filter"
        onClick={optionClick}
        style={{ height: "26px", width: "26px", marginRight: "0px" }}
      />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
