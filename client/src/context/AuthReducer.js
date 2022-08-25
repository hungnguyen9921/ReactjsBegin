const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                user: null,
                error: false,
            };
        }
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('USER', JSON.stringify(action.payload));
            return {
                user: action.payload,
                error: false,
            };
        }
        case 'LOGIN_FAILURE': {
            return {
                user: null,
                error: action.payload,
            };
        }
        case 'REGISTER_START': {
            return {
                user: null,
                error: false,
            };
        }
        case 'REGISTER_SUCCESS': {
            return {
                user: null,
                error: false,
            };
        }
        case 'REGISTER_FAILURE': {
            return {
                user: null,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default AuthReducer;
