import {
    ADD, DELETE, BUY
} from '../actions/appActions';


export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return state.filter(currentStateElement =>
                currentStateElement.id !== action.payload.id);
        case BUY:
            return state = []
        default:
            console.warn(`Nie mamy akcji typu: ${action.type}`);
            return state;
    }
}