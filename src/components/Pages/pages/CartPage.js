import React from 'react';

const CartPage = ({cart, setCartState}) => {

    const deleteElement = (id) => {
        let ordersList = [...cart];
        ordersList = ordersList.filter(order => order.id !== id)
        setCartState(ordersList)
    }

    const payForOrder = () => {
        setCartState([])
        alert('Zlecenie zostanie wykonane niezwłocznie po otrzymaniu zapłaty')
    }

    const payment = cart.reduce((sum, value) => sum + value.price, 0)

    const list = cart.map(product => (
        <li>
            <div>
                <p className={'name'}>{product.name}</p>
            </div>
            <div>
                <p className={'price'}>Cena: {product.price} zł</p>
            </div>
            <button className={'addToCart'} onClick={() => deleteElement(product.id)}>Usuń z koszyka</button>
        </li>
    ))

    return (
        <div className={'cart'}>
            <h2>koszyk</h2>
            <div className={'products'}>
                    {list.length === 0 ? <p>Brak produktów dodanych do koszyka</p> :<ul>{list}</ul>}
            </div>
            {payment === 0 ? null : <div className={'payment'}>
                <div>
                   <p className={'payment'}>Do zapłaty: {payment} zł</p>
                </div>
                <button onClick={() => payForOrder()}>Zapłać</button>
            </div>}
        </div>
    )
}

export default CartPage;