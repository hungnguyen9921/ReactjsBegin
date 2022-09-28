import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productdetailReducer, productlistReducer } from './Reducers/ProductReducer';
import { cartReducer } from './Reducers/CartReducer';
// import { userReducer } from './Reducers/UserReducer';

const reducer = combineReducers({
      productList: productlistReducer,
      productDetails: productdetailReducer,
      cart: cartReducer,
});

const cartItemsFromLocal = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

const initialState = {
      cart: {
            cartItems: cartItemsFromLocal,
      },
};

const middleware = [thunk];

const store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
