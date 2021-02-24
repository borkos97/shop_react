import React from "react";

import Typical from 'react-typical';

import './Header.css'


const Header = () => {
    return (
        <header>
            <div>
                <p><Typical loop={Infinity} wrapper={"b"}
                            steps={['Sklep motoryzacyjny...', 3000, 'Części do każdego samochodu...', 3000]}/>
                </p>
            </div>
        </header>
    )
}

export default Header