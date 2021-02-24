import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css'

import logo from '../../images/logo.png'

const list = [
    { name: "Koszyk", path: '/cart' },
    { name: "Kontakt", path: '/contact' },
    { name: "Produkty", path: '/products' },
    { name: "Strona główna", path: '/', exact: true },
]

const Navigation = (props) =>{
    const orders_number = props.ordersNumber.length
    const menu = list.map(item => {
            if (item.name !== 'Koszyk') return <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact: false}>{item.name}</NavLink>
            </li>
            else return <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact: false}>{item.name}
                <span className={'orders_number'}>  ({orders_number})</span>
                </NavLink>
            </li>
    }
    )
    return(
        <nav className={'main'}>
            <img className={'logo'} src={logo} alt="logo"/>
            <ul>
                {menu}

            </ul>
        </nav>
    )
}

export default Navigation