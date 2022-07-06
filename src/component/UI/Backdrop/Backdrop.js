import React from "react";
import ReactDOM from "react-dom";

//import "./Backdrop.css";

import classes from "./Backdrop.module.css";

// const Backdrop = props => {
//   return ReactDOM.createPortal(
//     <div className="backdrop" onClick={props.onClick}></div>,
//     document.getElementById('backdrop-hook')
//   );
// };
const Backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
