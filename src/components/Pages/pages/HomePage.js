import React from 'react';

import repair from '../../../images/offer/repair.png';
import purchase from '../../../images/offer/purchase.png';
import sell from '../../../images/offer/sell.png';

const list = [
    { name: "Skup części", img: purchase, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi facere iste modi molestias, provident quasi sit sunt temporibus. Amet deleniti dolor eum illo incidunt possimus quis quo ratione suscipit."},
    { name: "Naprawa", img: repair, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi facere iste modi molestias, provident quasi sit sunt temporibus. Amet deleniti dolor eum illo incidunt possimus quis quo ratione suscipit."},
    { name: "Sprzedaż", img: sell, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi facere iste modi molestias, provident quasi sit sunt temporibus. Amet deleniti dolor eum illo incidunt possimus quis quo ratione suscipit."},
]

const HomePage = () => {
    const block = list.map(item => (
        <div className={'block'}>
            <img src={item.img}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    ))
    return (
        <div className={'home'}>
            <div className={'aboutUs'}>
                <h2>O nas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi facere iste modi molestias, provident quasi sit sunt temporibus. Amet deleniti dolor eum illo incidunt possimus quis quo ratione suscipit.</p>
            </div>
            <div className={'offer'}>
                <h2>Co oferujemy?</h2>
                <ul>
                    {block}
                </ul>
            </div>
        </div>
    )
}

export default HomePage;