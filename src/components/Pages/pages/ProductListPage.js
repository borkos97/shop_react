import React from 'react';
import {Link} from 'react-router-dom'

import battery from "../../../images/parts/battery.png";
import brake from "../../../images/parts/brake.png";
import engine from "../../../images/parts/engine.png";
import manual from "../../../images/parts/manual-transmission.png";
import transmission from "../../../images/parts/transmission.png";
import wheel from "../../../images/parts/wheel.png";


const products = [
    { name: "Silniki", img: engine},
    { name: "Tarcze hamulcowe", img: brake},
    { name: "Akumulatory", img: battery},
    { name: "Opony", img: wheel},
    { name: "Skrzynia biegów", img: manual},
    { name: "Podwozie", img: transmission},
]
const ProductListPage = () => {
    const list = products.map(product => (
            <div className={'category'} key={product.name}>
                <Link to={`/product/${product.name}`}>
                    <h3>{product.name}</h3>
                    <img src={product.img} alt=""/>
                </Link>
            </div>
        )
    )
    return (
        <div className={"categories"}>
            <h2>lista poduktów</h2>
            <ul>
                <li>{list}</li>
            </ul>
        </div>
    )
}

export default ProductListPage;