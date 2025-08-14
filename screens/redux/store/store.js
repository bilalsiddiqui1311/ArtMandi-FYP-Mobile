import RootReducers from "../reducers/RootReducers"
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
export default () => {
    let store = createStore(RootReducers, compose(applyMiddleware(thunk)))
    return { store }
} 
