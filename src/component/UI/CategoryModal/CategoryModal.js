import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./CategoryModal.module.css";
import cancel from "../../../assets/x.png";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElement = document.getElementById("overlays");

const CategoryModal = (props) => {
  const closeOverlay = () => {
    props.onClose(false);
  };
  // useEffect(() => {}, [clicked]);
  const clicked = (e) => {
    console.log("first");
    props.scrollView(e.target.innerText);
    props.onClose(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={classes.jw_modal}
          style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
        >
          <div className={classes.jw_modal_body}>
            <div className={classes.cross_btn}>
              <img
                src={cancel}
                onClick={closeOverlay}
                className="cancel__modal"
              />
            </div>
            <div className={classes.jw_modal_head}>JUMP TO CATEGORY</div>
            <div className={classes.category__list}>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[0]}</span>
              </div>

              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[1]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[2]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[3]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[4]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[5]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[6]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[7]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[8]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[9]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[10]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[11]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[12]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[13]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[14]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[15]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[16]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[17]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[18]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[19]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[20]}</span>
              </div>
              <div onClick={clicked}>
                <span style={{ marginRight: "10px" }}>{props.items[21]}</span>
              </div>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default CategoryModal;
