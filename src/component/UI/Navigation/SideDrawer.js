/** @format */

import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import fb from "../../../assets/facebook.png";
import insta from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import wp from "../../../assets/whatsapp.png";
import NavigationItems from "./NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";

const SideDrawer = (props) => {
  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;
  let loc = url.slice(1);
  //console.log(loc);

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        {loc === "TestDhaba" ? (
          <div className={classes.Logo}>
            <Logo />
            <h4>Test Dhaba</h4>
            <p className={classes.address}>Kandivali, Mumbai </p>
            <p>Get in touch with us at: 8767775550</p>

            <a href="https://www.facebook.com/">
              <img src={fb} />
            </a>
            <a href="https://www.instagram.com//">
              <img src={insta} />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} />
            </a>
            <a href="https://www.whatsapp.com/">
              <img src={wp} />
            </a>
          </div>
        ) : (
          <div className={classes.Logo}>
            <Logo />
            <h4>Restaurant Name</h4>
            <p className={classes.address}>Kandivali, Mumbai </p>
            <p>Get in touch with us at: 8767775550</p>

            <a href="https://www.facebook.com/">
              <img src={fb} />
            </a>
            <a href="https://www.instagram.com//">
              <img src={insta} />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} />
            </a>
            <a href="https://www.whatsapp.com/">
              <img src={wp} />
            </a>
          </div>
        )}

        <nav>
          <NavigationItems isAuthenticated={props.isAuth} prevLoc={loc} />
        </nav>
        <div className={classes.powred}>
          <a href="https://menu-venture.github.io/Vikri/">
            <h4>
              Powered by{" "}
              <span style={{ fontSize: "18px", fontStyle: "italic" }}>
                Vikri.in
              </span>
            </h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
