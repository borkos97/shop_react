export const ADD = 'ADD';
export const DELETE = 'DELETE'
export const BUY = 'BUY'

export const addProduct = ({id, name, price}) => ({
    type: ADD,
    payload: {
        id,
        name,
        price,
    }
});

export const deleteProduct = (id) => ({
    type: DELETE,
    payload: {
        id: id,
    }
});

export const buyProduct = () => ({
    type: BUY,
    payload: {
    }
});