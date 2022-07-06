/** @format */
import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./component/Pages/Home/Home";
import CartProvider from "./component/store/CartProvider";
import Cart from "./component/Cart/Cart";
import Layout from "./component/UI/Navigation/Layout";
import Faq from "./component/Pages/Faq/Faq";
import About from "./component/Pages/AboutUs/AboutUs";
import Redindies from "./component/Pages/Redindies";
import Dwarka from "./component/Pages/Dwarka";
import LuckyResto from "./component/Pages/LuckyResto";
import Pourpure from "./component/Pages/Pourpure";
import SaharaBeverages from "./component/Pages/SaharaBeverages";
import Swaad from "./component/Pages/Swaad";
import Input from "./component/UI/Input/Input";
import Modal from "./component/UI/Modal/Modal";
import cancel from "./assets/x.png";
import "./App.css";
import Card from "./component/UI/Card/Card";
import LayoutPage from "./component/Pages/NewLayout/LayoutPage";
// import Home from "./component/Pages/NewLayout/Home";
import Soup from "./component/Pages/NewLayout/Soup";
import Feedback from "./component/Pages/Feedback/Feedback";
import Guide from "./component/Pages/Guide/Guide";
import Lasagne from "./component/Pages/NewLayout/Lasagne";
import RiceNoodles from "./component/Pages/NewLayout/RiceNoodles";
import Starters from "./component/Pages/NewLayout/Starters";
import MainCourse from "./component/Pages/NewLayout/MainCourse";
import Desserts from "./component/Pages/NewLayout/Deserts";
import MilkShakes from "./component/Pages/NewLayout/Milk Shakes";
import Sizzlers from "./component/Pages/NewLayout/Sizzlers";

const TRACKING_ID = "UA-233414864-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const sampleLocation = useLocation();
  let loc;
  const url = sampleLocation.pathname;

  if (url === "/001067RIKN") {
    loc = "Red Indies";
  } else if (url === "/006014SD") {
    loc = "Swaad Restaurant";
  } else if (url === "/003067PPKN") {
    loc = "The Pour Pure";
  }
  useEffect(() => {
    setShowForm(true);
    setShowOverlay(true);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const closeOverlay = () => {
    setShowForm(false);
  };
  const openOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <>
      {showForm ? (
        <Modal onClose={closeOverlay}>
          <img src={cancel} className="cancel__modal" onClick={closeOverlay} />
          {/* <iframe
            id="redirect"
            style={{ display: "none" }}
            onLoad={
              submitted ? (
                (window.location = "http://localhost:3000/#/001067RIKN")
              ) : (
                <p></p>
              )
            }
          ></iframe> */}
          <form
            className="form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdx6F9N3NiwSGYNvqzwLoxdRpEadnYfGDgAod8mWiZ_IR2Yvg/formResponse"
            // method="post"
            // target=redir
            // onSubmit={() => {
            //   setSubmitted(true);
            // }}
          >
            <br />
            <h2 style={{ textAlign: "center" }}>Guest Register :</h2>
            <p style={{ textAlign: "center" }}>
              Please help us in our effort to ensure safe and stress-free
              dining. This will help us to serve you better.
            </p>
            <br />
            <div className="input__custom">
              <span>Restaurant Name :</span>
              <input type="text" value={loc} name="entry.655061999" />
            </div>
            <div className="input__custom">
              <span>Mobile Number :</span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                name="entry.1091364309"
              />
            </div>
            <div className="input__custom">
              <span>Name :</span>
              <input
                type="text"
                placeholder="Enter your full name"
                name="entry.204408474"
              />
            </div>

            <div className="jw-modal-btn-row">
              <input
                className="btn"
                style={{
                  width: "100%",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </Modal>
      ) : (
        <CartProvider>
          <Layout onShowCart={showCartHandler}>
            <main style={{ textAlign: "center" }}>
              <Routes>
                {/* <Route path="/" element={<Home />} exact /> */}
                <Route path="/aboutus" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </main>
          </Layout>

          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {/* <Header onShowCart={showCartHandler} /> */}

          <main>
            {/* <Meals /> */}
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/001067RIKN" element={<Redindies />} exact />
              <Route path="/002209DNSP" element={<Dwarka />} exact />
              <Route path="/006014SD" element={<Swaad />} />
              <Route path="/003067PPKN" element={<Pourpure />} />
              <Route path="/soup" element={<Soup />} />
              <Route path="/lasagne" element={<Lasagne />} />
              <Route path="/maincourse" element={<MainCourse />} />
              <Route path="/sizzlers" element={<Sizzlers />} />
              <Route path="/ricenoodles" element={<RiceNoodles />} />
              <Route path="/starters" element={<Starters />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/milkshakes" element={<MilkShakes />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </main>
        </CartProvider>

        // <>
        //   <div>
        //     <LayoutPage>
        //       <Routes>
        //         <Route path="/" element={<Home />} exact />
        //         <Route path="/soup" element={<Soup />} />
        //         <Route path="/faq" component={<Faq />} />
        //       </Routes>
        //     </LayoutPage>
        //   </div>
        // </>
      )}
    </>
  );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(App);
