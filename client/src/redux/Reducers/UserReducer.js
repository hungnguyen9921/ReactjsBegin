import {
      USER_LOGIN_FAIL,
      USER_LOGIN_REQUEST,
      USER_LOGIN_SUCCESS,
} from '../Constants/UserConstants';

export const userReducer = (state, action) => {
      switch (action.type) {
            case USER_LOGIN_REQUEST:
                  return { ...state, loading: true };
            case USER_LOGIN_SUCCESS:
                  return {};
            case USER_LOGIN_FAIL:
            default:
                  break;
      }
};
