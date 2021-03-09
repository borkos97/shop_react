import React from 'react';
import {NavLink} from "react-router-dom";

const list = [
    {name: "Koszyk", path: '/cart'},
    {name: "Kontakt", path: '/contact'},
    {name: "Produkty", path: '/products'},
    {name: "Strona główna", path: '/', exact: true},
]

const Menu = ({ordersNumber}) => {
    const menu = list.map(item => {
            if (item.name !== 'Koszyk') return <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
            </li>
            else return <li key={item.name}>
                <NavLink className={'cart'} to={item.path} exact={item.exact ? item.exact : false}>{item.name}
                    <span className={'orders_number'}>  ({ordersNumber})</span>
                </NavLink>
            </li>
        }
    )
    return (
        <div>
            {menu}
        </div>
    )
}

export default Menu;