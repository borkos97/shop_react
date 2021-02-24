import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Page.css'

import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage'

const Page = (props) => {
    return(
        <>
            <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/products"} component={ProductListPage} />
                <Route path={"/product/:id"} render={(matchProps) => <ProductPage {...matchProps} props={props.addOrder}/>} />
                <Route path={"/contact"} component={ContactPage} />
                <Route path={"/cart"} component={() => <CartPage cart={props.cart}
                                                                 deleteOrder={props.deleteOrder}
                                                                 payForOrder={props.payForOrder}/> }/>
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}

export default Page