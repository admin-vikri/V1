/** @format */

import React, { useState } from "react";
import classes from "./Home.module.css";

import akelabread from "../../../assets/akelabread.png";
import cancel from "../../../assets/x.png";
import Modal from "../../UI/Modal/Modal";

// import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeOverlay = () => {
    setShowModal(false);
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <Modal onClose={closeOverlay}>
          <img
            src={cancel}
            className={classes.cancel__modal}
            onClick={closeOverlay}
          />
          <img src={akelabread} />
          <div className={classes.itemMoreContent}>Combo Jumbo</div>
        </Modal>
      ) : (
        <div></div>
      )}
      <div className={classes.homePage}>
        {/* <div className={classes.homeHeader}>
          <div className={classes.content}>
            <div className={classes.align_items_center}>
              <div className={classes.back}>Back</div>
              <div style={{ textTransform: "uppercase" }}>Menu</div>
            </div>
            <div className={classes.align_items_center}></div>
          </div>
        </div> */}
        {/* Main */}
        <div style={{ paddingBottom: "853px", position: "relative" }}>
          <div className={classes.group_name}>
            <span> APPETIZER </span>
          </div>
          <div className={classes.catalogGrid}>
            <div className={classes.viewBox}>
              <div className={classes.viewBoxItem}>
                <div className={classes.viewBoxItemImage} onClick={openModal}>
                  <div className={classes.viewBoxItemImageWrapper}>
                    <img src={akelabread} className={classes.image} />
                  </div>
                </div>
                <div className={classes.viewBoxItemInfo}>
                  <div className={classes.productName}> Chilly Potato</div>
                  {/* <div className={classes.description}>
                    <div>
                      Grilled chicken breast marinated with mayo and mustard
                      topped with fresh tomatoes, jalapeño, onion and cilantro
                    </div>
                  </div> */}
                  <div className={classes.align_items_center}>
                    <div className={classes.priceBlock}>
                      <div className={classes.price}>
                        <div className={classes.currency}>Rs.100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.viewBox}>
              <div className={classes.viewBoxItem}>
                <div className={classes.viewBoxItemImage}>
                  <div className={classes.viewBoxItemImageWrapper}>
                    <img src={akelabread} className={classes.image} />
                  </div>
                </div>
                <div className={classes.viewBoxItemInfo}>
                  <div className={classes.productName}> Chilly Potato</div>
                  <div className={classes.align_items_center}>
                    <div className={classes.priceBlock}>
                      <div className={classes.price}>
                        <div className={classes.currency}>Rs.100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
