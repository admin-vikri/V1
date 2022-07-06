import React, { useContext, useEffect, useRef, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import CartContext from "../store/cart-context";
import { redindies, redindies_categories } from "../../items/redindies";
import { dwarka, dwarka_categories } from "../../items/dwarka";
import CategoryModal from "../UI/CategoryModal/CategoryModal";

function AvailableMeals(props) {
  let categories;
  let mainRoot;
  const chotasRef = useRef();
  const badaRef = useRef();
  const sidesRef = useRef();
  const sweetRef = useRef();
  const tsoupRef = useRef();
  const bswRef = useRef();
  const saladRef = useRef();
  const mdRef = useRef();
  const enRef = useRef();
  const bhpRef = useRef();
  const pizzaRef = useRef();
  const pizzaTRef = useRef();
  const sizRef = useRef();
  const idref = useRef();
  const lasagneRef = useRef();
  const pastaRef = useRef();
  const chMainRef = useRef();
  const riceRef = useRef();
  const chspRef = useRef();
  const dessertsRef = useRef();
  const mocktailsRef = useRef();
  const milksRef = useRef();
  const [filteredList, setFilteredList] = new useState(redindies);
  const [filteredCategory, setFilteredCategory] = new useState(
    props.filteredItems
  );
  const [allCategory, setAllCategory] = new useState([
    props.mealsListCSoup,
    props.mealsListTSoup,
    props.mealsListChSoup,
    props.mealsListChStarters,
    props.mealsListMStarters,
    props.mealsListBsw,
    props.mealsListSalad,
  ]);
  const cartCtx = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  function scrollView(input) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(input);
    if (input === "Chotas" || input === "Chinese Starters") {
      mainRoot = document.getElementById("chotas");
      chotasRef.current &&
        chotasRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Bada" || input === "Mexican Starters") {
      mainRoot = document.getElementById("bada");
      badaRef.current &&
        badaRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Sides" || input === "Chinese Soups") {
      mainRoot = document.getElementById("sides");
      sidesRef.current &&
        sidesRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Sweet Dish" || input === "Continental Soups") {
      mainRoot = document.getElementById("sweet");
      sweetRef.current &&
        sweetRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Thai Soups") {
      tsoupRef.current &&
        tsoupRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Baltic Side Walks") {
      bswRef.current &&
        bswRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Insalata (Salad)") {
      saladRef.current &&
        saladRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Mexican Delights") {
      mdRef.current &&
        mdRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Enchiladas") {
      enRef.current &&
        enRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Baked Hot Potatoes") {
      bhpRef.current &&
        bhpRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Pizza") {
      pizzaRef.current &&
        pizzaRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Pizza Toppings") {
      pizzaTRef.current &&
        pizzaTRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Sizzlers") {
      sizRef.current &&
        sizRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Italian Delights") {
      idref.current &&
        idref.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Lasagne") {
      lasagneRef.current &&
        lasagneRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Pasta") {
      pastaRef.current &&
        pastaRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Chinese Main Course") {
      chMainRef.current &&
        chMainRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Rice & Noodles") {
      riceRef.current &&
        riceRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Chop Suey") {
      chspRef.current &&
        chspRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Desserts") {
      dessertsRef.current &&
        dessertsRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Mocktails") {
      mocktailsRef.current &&
        mocktailsRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    } else if (input === "Milk Shakes") {
      milksRef.current &&
        milksRef.current.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
          alignToTop: false,
        });
    }
  }

  const handleClose = (childData) => {
    setOpen(childData);
  };

  const handleOpen = () => {
    setOpen(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let mealss;
  useEffect(() => {
    console.log("useefect");
    if (props.url === "/001067RIKN") {
      if (cartCtx.isVeg === "veg") {
        mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
      } else if (cartCtx.isVeg === "nonveg") {
        mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
      } else {
        mealss = redindies;
      }
      setFilteredList(mealss);
    } else {
      if (cartCtx.isVeg === "veg") {
        mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
      } else if (cartCtx.isVeg === "nonveg") {
        mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
      } else {
        mealss = dwarka;
      }
      setFilteredList(mealss);
    }
  }, [props.url, cartCtx.isVeg, open]);

  if (props.url === "/001067RIKN") {
    categories = redindies_categories;
    if (cartCtx.isVeg === "veg") {
      mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
    } else if (cartCtx.isVeg === "nonveg") {
      mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = redindies;
    }
  } else {
    categories = dwarka_categories;
    if (cartCtx.isVeg === "veg") {
      mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
    } else if (cartCtx.isVeg === "nonveg") {
      mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = dwarka;
    }
  }

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...props.mealss];
    var updatedCategory;
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // updatedCategory = updatedList.map((item, i) => {
    //   return item.category;
    // });
    //setFilteredList(updatedList);
    props.getFilteredValue(updatedList);

    // const unique = [...new Set(updatedCategory.map((item) => item))];
    // console.log(unique);
    // setFilteredCategory(unique);
  };
  console.log(props.allcat);
  //REDINDIES
  return (
    <section className={classes.meals}>
      <div className="search-header" style={{ textAlign: "center" }}>
        <input
          className={classes.searchbar}
          placeholder="Search your favourite..."
          onChange={filterBySearch}
        />
      </div>

      <Card>
        <div className={classes.container__fab}>
          <button className={classes.btn__fab} onClick={handleOpen}>
            Menu
          </button>
        </div>
        {open && (
          <CategoryModal
            onClose={handleClose}
            open={open}
            items={props.filteredItems}
            scrollView={scrollView}
          ></CategoryModal>
        )}

        <div id="chotas" ref={chotasRef} className={classes.headline__big}>
          {props.filteredItems[0]}
        </div>
        <ul>
          {props.categoryApp}
          {props.mealsListChStarters}
        </ul>

        <div id="bada" ref={badaRef} className={classes.headline__big}>
          {props.filteredItems[1]}
        </div>
        <ul>
          {props.mealsListSide}
          {props.mealsListMStarters}
        </ul>
        <div id="sides" ref={sidesRef} className={classes.headline__big}>
          {props.filteredItems[2]}
        </div>
        <ul>
          {props.mealsListTand}
          {props.mealsListChSoup}
        </ul>

        <div id="sweet" ref={sweetRef} className={classes.headline__big}>
          {props.filteredItems[3]}
        </div>
        <ul>
          {props.mealsListBiry}
          {props.mealsListCSoup}
        </ul>
        <div className={classes.headline__big} ref={tsoupRef}>
          {props.filteredItems[4]}
        </div>
        <ul>{props.mealsListTSoup}</ul>

        <div className={classes.headline__big} ref={bswRef}>
          {props.filteredItems[5]}
        </div>
        <ul>{props.mealsListBsw}</ul>

        <div className={classes.headline__big} ref={saladRef}>
          {props.filteredItems[6]}
        </div>
        <ul>{props.mealsListSalad}</ul>

        <div className={classes.headline__big} ref={mdRef}>
          {props.filteredItems[7]}
        </div>
        <ul>{props.mealsListMd}</ul>

        <div className={classes.headline__big} ref={enRef}>
          {props.filteredItems[8]}
        </div>
        <ul>{props.mealsListEn}</ul>

        <div className={classes.headline__big} ref={bhpRef}>
          {props.filteredItems[9]}
        </div>
        <ul>{props.mealsListBhp}</ul>

        <div className={classes.headline__big} ref={pizzaRef}>
          {props.filteredItems[10]}
        </div>
        <ul>{props.mealsListPizza}</ul>

        <div className={classes.headline__big} ref={pizzaTRef}>
          {props.filteredItems[11]}
        </div>
        <ul>{props.mealsListPizzaT}</ul>
        <div className={classes.headline__big} ref={sizRef}>
          {props.filteredItems[12]}
        </div>
        <ul>{props.mealsListSiz}</ul>
        <div className={classes.headline__big} ref={idref}>
          {props.filteredItems[13]}
        </div>
        <ul>{props.mealsListId}</ul>
        <div className={classes.headline__big} ref={lasagneRef}>
          {props.filteredItems[14]}
        </div>
        <ul>{props.mealsListLasagne}</ul>
        <div className={classes.headline__big} ref={pastaRef}>
          {props.filteredItems[15]}
        </div>
        <ul>{props.mealsListPasta}</ul>

        <div className={classes.headline__big} ref={chMainRef}>
          {props.filteredItems[16]}
        </div>
        <ul>{props.mealsListChMain}</ul>

        <div className={classes.headline__big} ref={riceRef}>
          {props.filteredItems[17]}
        </div>
        <ul>{props.mealsListRice}</ul>
        <div className={classes.headline__big} ref={chspRef}>
          {props.filteredItems[18]}
        </div>
        <ul>{props.mealsListChsp}</ul>
        <div className={classes.headline__big} ref={dessertsRef}>
          {props.filteredItems[19]}
        </div>
        <ul>{props.mealsListDesserts}</ul>
        <div className={classes.headline__big} ref={mocktailsRef}>
          {props.filteredItems[20]}
        </div>
        <ul>{props.mealsListMocktails}</ul>
        <div className={classes.headline__big} ref={milksRef}>
          {props.filteredItems[21]}
        </div>
        <ul>{props.mealsListMilkS}</ul>
        <a href="https://menu-venture.github.io/Vikri/">
          <h4>
            Powered by{" "}
            <span style={{ fontSize: "18px", fontStyle: "italic" }}>
              Vikri.in
            </span>
          </h4>
        </a>
      </Card>
    </section>
  );
}

export default AvailableMeals;
