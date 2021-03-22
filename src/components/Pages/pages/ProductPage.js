import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import {addProduct} from "../../../actions/appActions";

import items from '../../../DataBase'

import arrow from '../../../images/arrow.png'

const ProductPage = ({match}) => {

    const dispatch = useDispatch();
    const id = useSelector(store => store.products).length

    const addToCart = (name, price) => {
        const order = {
            id: id + 1,
            name,
            price,
        }
        dispatch(addProduct(order))
    }

    const list = items.map(product => {
        if (product.type === match.params.id)
            return <li key={product.id}>
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
        else return null
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