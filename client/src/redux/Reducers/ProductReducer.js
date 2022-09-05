import {
      PRODUCT_DETAIL_FAIL,
      PRODUCT_DETAIL_REQUEST,
      PRODUCT_DETAIL_SUCCESS,
      PRODUCT_LIST_FAIL,
      PRODUCT_LIST_REQUEST,
      PRODUCT_LIST_SUCCESS,
} from '../Constants/ProductConstants';

export const productlistReducer = (state = { products: [] }, action) => {
      switch (action.type) {
            case PRODUCT_LIST_REQUEST:
                  return { ...state, loading: true };
            case PRODUCT_LIST_SUCCESS:
                  return { loading: false, products: action.payload };
            case PRODUCT_LIST_FAIL:
                  return { loading: false, error: action.payload };
            default:
                  return state;
      }
};

export const productdetailReducer = (state = { products: { reviews: [] } }, action) => {
      switch (action.type) {
            case PRODUCT_DETAIL_REQUEST:
                  return { loading: true, products: [] };
            case PRODUCT_DETAIL_SUCCESS:
                  return { loading: false, products: action.payload };
            case PRODUCT_DETAIL_FAIL:
                  return { loading: false, error: action.payload };
            default:
                  return state;
      }
};
