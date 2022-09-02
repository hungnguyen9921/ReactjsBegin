import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/AuthProvider';

ReactDOM.render(
      <React.StrictMode>
            <Provider store={store}>
                  <AuthContextProvider>
                        <App />
                  </AuthContextProvider>
            </Provider>
      </React.StrictMode>,
      document.getElementById('root'),
);
