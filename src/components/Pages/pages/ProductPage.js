import React from 'react';
import {Link} from 'react-router-dom';

import items from '../../../DataBase'

import arrow from '../../../images/arrow.png'

const ProductPage = ({match, cart, setCartState}) => {
    const addToCart = (name, price) => {
        const order = {
            id: cart.length,
            name: name,
            price: price
        }
        setCartState(prevState => [...prevState, order])
    }

    const list = items.map(product => {
        if (product.type === match.params.id)
            return <li>
                <div>
                    <p className={'name'}>{product.name}</p>
                </div>
                <div>
                    <p className={'price'}>Cena: {product.price} zł</p>
                </div>
                <button className={'addToCart'} onClick={() => addToCart(product.name, product.price)}>Dodaj do
                    koszyka
                </button>
            </li>
    })

    return (
        <>
            <Link to={'/products'}><img className={'arrow'} src={arrow} alt="Powrót"/></Link>
            <h2>{match.params.id}</h2>
            <div className={'products'}>
                <ul>
                    {list}
                </ul>
            </div>

        </>
    )
}

export default ProductPage;