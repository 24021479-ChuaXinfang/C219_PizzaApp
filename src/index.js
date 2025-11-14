import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const currentHour = new Date().getHours();
const isOpen = currentHour >= 10 && currentHour < 22;

function App() {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  function toggleFavourite(pizzaName) {
    let newFavourites;

    if (favourites.includes(pizzaName)) {
      newFavourites = favourites.filter(
        (name) => name !== pizzaName
      );
    } else {
      newFavourites = [...favourites, pizzaName];
    }

    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

  return (
    <div className="container">
      <Header />
      <Favourites
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      <Menu
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isOpen={isOpen}
      />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="pizzas/banner.png" alt="banner" />
      <h1>Xinfang's Pizza Co.</h1>
      <p>Opening Hours: 10am - 10pm</p>
    </div>
  );
}

function Pizza(props) {
  const isInactive = props.soldout || !props.isOpen;

  return (
    <div className={`pizza ${isInactive ? "inactive" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>${props.price}</p>

      <div>
        {!isInactive ? (
          <button
            className="btn"
            onClick={() => props.toggleFavourite(props.name)}
          >
            {props.isFavourite ? "♥" : "♡"}
          </button>
        ) : (
          <button className="btn sold-out-btn">SOLD OUT</button>
        )}
      </div>
    </div>
  );
}

function Favourites(props) {
   const availableFavourites = props.favourites.filter((name) => {
    const pizza = pizzaData.find((p) => p.name === name);
    return pizza && !pizza.soldOut;
  });

  return isOpen ? (
    <div className="favlist">
      <h2>Your Top Picks</h2>

      <p>
        {availableFavourites.length > 0
          ? "Good news! Your favourite pizza is available today."
          : "You haven't added a favourite yet."}
      </p>

      {availableFavourites.length > 0 && (
        <div className="favourites">
          {availableFavourites.map((name) => {
            const pizza = pizzaData.find((p) => p.name === name);

            return (
              pizza && (
                <div className="favpizza">
                  <img
                    src={pizza.photoName}
                    alt={pizza.name}
                  />
                  <h3>{pizza.name}</h3>
                  <p>{pizza.ingredients}</p>
                  <p>${pizza.price}</p>

                  <div>
                    <button className="btn">Order Now</button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <div className="favlist">
      <h2>Your Top Picks</h2>
      <p>Your favourite pizzas are available when the shop is open.</p>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {isOpen && <p>Authentic Italian Cuisine</p>}

      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldout={pizza.soldOut}
            isFavourite={props.favourites.includes(pizza.name)}
            toggleFavourite={props.toggleFavourite}
            isOpen={props.isOpen}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return isOpen ? (
    <footer className="order">
      <p className="footer">We're currently open</p>
      <button className="btn">Order</button>
    </footer>
  ) : (
    <footer className="order">
      <p className="footer">Sorry, we're closed</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);