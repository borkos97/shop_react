import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

import Menu from './Menu'

import logo from '../../images/logo.png'

const Navigation = () =>{
    return(
        <nav className={'main'}>
            <NavLink to={"/"}>
                <img className={'logo'} src={logo} alt="logo"/>
            </NavLink>
            <ul>
                <Menu/>
            </ul>
        </nav>
    )
}

export default Navigation