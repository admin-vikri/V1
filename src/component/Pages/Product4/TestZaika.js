import React from "react";
import { Link } from "react-router-dom";

import classes from "./p4.module.css";
import lasagna from "../../../assets/lasagna.jpg";
import Card from "../../UI/Card/Card";

const TestZaika = () => {
  return (
    <Card>
      <div className={classes.tiles}>
        <Link to="/ricenoodles">
          <img
            src="https://images.unsplash.com/photo-1540100716001-4b432820e37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
            width="310"
            height="220"
            alt="lasagna"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "6px 6px 6px 6px",
              }}
            >
              Rice and Noodles
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/sizzlers">
          <img src={lasagna} width="310" height="220" alt="lasagna" />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Sizzlers
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/desserts">
          <img
            src="https://images.unsplash.com/photo-1448131063153-f1e240f98a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzZXJ0cyUyMGluJTIwc3dlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            width="310"
            height="220"
            alt="lasagna"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Desserts
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/milkshakes">
          <img
            src="https://images.unsplash.com/photo-1603534863485-679a90930b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vY2t0YWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="310"
            height="220"
            alt="lasagna"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Milk Shakes
            </button>
          </div>
        </Link>
      </div>
      <div className={classes.tiles}>
        <Link to="/starters">
          <img
            src="https://images.unsplash.com/photo-1532465909-4e0278962a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RhcnRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            width="310"
            height="220"
            alt="starters"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Starters
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/soup">
          <img
            src="https://images.unsplash.com/photo-1581347860118-588a42326161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80"
            width="310"
            height="220"
            alt="pizza"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Soups
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/lasagne">
          <img src={lasagna} width="310" height="220" alt="lasagna" />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Lasagna
            </button>
          </div>
        </Link>
      </div>

      <div className={classes.tiles}>
        <Link to="/maincourse">
          <img
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80"
            width="310"
            height="220"
            alt="lasagna"
          />
          <div className={classes.filter__list}>
            <button
              className={classes.btn}
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Chinese Main Course
            </button>
          </div>
        </Link>
      </div>

      <a
        href="https://menu-venture.github.io/Vikri/"
        style={{ textAlign: "center", color: "black" }}
      >
        <h4>
          Powered by{" "}
          <span style={{ fontSize: "18px", fontStyle: "italic" }}>
            Vikri.in
          </span>
        </h4>
      </a>
    </Card>
  );
};

export default TestZaika;
