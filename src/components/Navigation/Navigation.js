import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

import logo from '../../images/logo.png'

const list = [
    { name: "Koszyk", path: '/cart' },
    { name: "Kontakt", path: '/contact' },
    { name: "Produkty", path: '/products' },
    { name: "Strona główna", path: '/', exact: true },
]

const Navigation = ({ordersNumber}) =>{
    const menu = list.map(item => {
            if (item.name !== 'Koszyk') return <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact: false}>{item.name}</NavLink>
            </li>
            else return <li key={item.name}>
                <NavLink className={'cart'} to={item.path} exact={item.exact ? item.exact: false}>{item.name}
                <span className={'orders_number'}>  ({ordersNumber})</span>
                </NavLink>
            </li>
    }
    )
    return(
        <nav className={'main'}>
            <NavLink to={"/"}>
                <img className={'logo'} src={logo} alt="logo"/>
            </NavLink>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation