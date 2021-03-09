import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Pages/Page";
import Footer from "./components/Footer/Footer";


const App = () => {
    const [cart, setCart] = useState([])

    return (
        <Router>
            <div className="app">
                <nav>
                    {<Navigation ordersNumber={cart.length}/>}
                </nav>
                <header>
                    {<Header/>}
                </header>
                <main>
                    <section className={"page"}>
                        <Page cart={cart} setCartState={setCart}/>
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