import axios from 'axios';
export const loginCall = async (userCredentials, dispatch) => {
      dispatch({ type: 'LOGIN_START' });
      try {
            const res = await axios.post('/api/auth/login', userCredentials);
            console.log(res.data);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error });
      }
};

export const registerCall = async (userCredentials, dispatch) => {
      dispatch({ type: 'REGISTER_START' });
      try {
            const res = await axios.post('/api/auth/register', userCredentials);
            dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
      } catch (error) {
            dispatch({ type: 'REGISTER_FAILURE', payload: error });
      }
};

export const logoutCall = async (dispatch) => {
      dispatch({ type: 'LOGOUT' });
      try {
            localStorage.removeItem('USER');
            document.location.href('/');
      } catch (error) {
            dispatch({ type: 'LOGOUT_FAIL', payload: error });
      }
};

export const updateCall = async (userCredentials, dispatch) => {
      dispatch({ type: 'UPDATE_START' });
      try {
            const res = await axios.put('/api/auth/profile', userCredentials);
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
      } catch (error) {
            dispatch({ type: 'UPDATE_FAILURE', payload: error });
      }
};
