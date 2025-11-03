import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
    return (
    <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div>
    );
}

function Header() { // follow naming convention
    return <h1 style={{color:"orange", fontSize: "48px", textTransform:"uppercase"}}>Xinfang's Pizza Co.</h1>;
}

function Pizza() {
    return (
        <div>
        <img src="pizzas/spinaci.jpg" alt="Spinach Pizza"/>
        <h3>Spinaci Pizza</h3>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        <p>10</p>
        </div>
    );
}

function Menu() {
    return(
        <div className="menu">
        <h2>Our Menu</h2>
        <Pizza/>
        <Pizza/>
        </div>
    );
}


function Footer() {
    const currentHour = new Date().getHours();
    let message;

    if (currentHour >= 10 && currentHour < 22) {
        message = "We're currently open";
    } else {
        message = "Sorry, we're closed";
    }
    return(
        <footer className="footer"><p>{message}</p></footer>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);