import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

import Menu from './Menu'

import logo from '../../images/logo.png'

const Navigation = ({ordersNumber}) =>{
    return(
        <nav className={'main'}>
            <NavLink to={"/"}>
                <img className={'logo'} src={logo} alt="logo"/>
            </NavLink>
            <ul>
                <Menu ordersNumber={ordersNumber}/>
            </ul>
        </nav>
    )
}

export default Navigation