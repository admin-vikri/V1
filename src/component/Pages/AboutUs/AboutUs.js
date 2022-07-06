import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context";

const AboutUs = (props) => {
  //let url = sampleLocation.pathname;
  //let from = location.state?.from?.pathname || props.url;
  // navigate(from, { replace: true });
  console.log(props.url);
  // if (url === "/001067RIKN") {
  //   about = "Red Indies";
  // } else if (url === "/002209DNSP") {
  //   about = "Dwarka";
  // } else if (url === "/006014SD") {
  //   about = "Swaad";
  // }
  return <h1>About</h1>;
};

export default AboutUs;
