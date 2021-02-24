import React, { useState } from 'react';
import  { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Pages/Page";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [cart, setCart] = useState([])

    const addToCart = (name, price) => {
        const order = {
            id: cart.length,
            name:name,
            price:price
        }
        setCart(prevState => [...prevState, order])
    }

    const deleteElement = (id) => {
        let ordersList = [...cart];
        ordersList = ordersList.filter(order => order.id !== id)
        setCart(ordersList)
    }

    const payForOrder = () => {
        setCart([])
        alert('Zlecenie zostanie wykonane niezwłocznie po otrzymaniu zapłaty')
    }

    return (
        <Router>
          <div className="app">
            <nav>
              {<Navigation ordersNumber={cart}/>}
            </nav>
            <header>
              {<Header/>}
            </header>
            <main>
              <section className={"page"}>
                <Page cart={cart} addOrder={addToCart} deleteOrder={deleteElement} payForOrder={payForOrder}/>
              </section>
            </main>
            <footer>
              {<Footer/>}
            </footer>
          </div>
        </Router>

    );
}

export default App;