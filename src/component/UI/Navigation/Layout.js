import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import NavigationItems from "./NavigationItems";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };
  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        onClick={props.onShowCart}
      />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
