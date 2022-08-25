import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const initialState = {
    user: JSON.parse(localStorage.getItem('USER')),
    error: null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const store = {
        user: state.user,
        error: state.error,
        dispatch,
    };

    return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};