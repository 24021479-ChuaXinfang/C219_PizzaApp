import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
    <>
    <Header/>
    <Pizza/>
    </>
    );
}

function Header() { // follow naming convention
    return <h1>Xinfang's Pizza Co.</h1>;
}

function Pizza() {
    return (
        <>
        <img src="pizzas/spinaci.jpg"></img>
        <h4>Spinaci Pizza</h4>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        <p>10</p>
        
        <img src="pizzas/funghi.jpg"></img>
        <h4>Funghi Pizza</h4>
        <p>Tomato, mozarella, mushrooms, and onion</p>
        <p>12</p>

        <img src="pizzas/salamino.jpg"></img>
        <h4>Salamino Pizza</h4>
        <p>Tomato, mozarella, and pepperoni</p>
        <p>15</p>

        <img src="pizzas/prosciutto.jpg"></img>
        <h4>Prosciutto Pizza</h4>
        <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        <p>18</p>

        <img src="pizzas/focaccia.jpg"></img>
        <h4>Focaccia Pizza</h4>
        <p>Bread with italian olive oil and rosemary</p>
        <p>6</p>

        <img src="pizzas/margherita.jpg"></img>
        <h4>Margherita Pizza</h4>
        <p>Tomato and mozarella</p>
        <p>10</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);