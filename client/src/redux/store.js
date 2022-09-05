import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productdetailReducer, productlistReducer } from './Reducers/ProductReducer';

const reducer = combineReducers({
      productList: productlistReducer,
      productDetails: productdetailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
