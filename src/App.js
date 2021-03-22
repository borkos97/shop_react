import React, { useState } from 'react';
import { Provider } from 'react-redux';
import  { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Pages/Page";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen";

import store from './store/store';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Provider store={store}>
        {isLoading ? <SplashScreen setIsLoading={setIsLoading}/> :
                <Router>
                    <div className="app">
                        <nav>
                            {<Navigation/>}
                        </nav>
                        <header>
                            {<Header/>}
                        </header>
                        <main>
                            <section className={"page"}>
                                <Page/>
                            </section>
                        </main>
                        <footer>
                            {<Footer/>}
                        </footer>
                    </div>
                </Router>
        }
        </Provider>
    );
}

export default App;