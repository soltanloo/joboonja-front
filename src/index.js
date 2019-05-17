import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { toast } from 'react-toastify';

axios.interceptors.response.use(undefined, function (error) {
  if(error.response.status === 401) {
    localStorage.removeItem("authToken")
    toast.warn("لطفاً ابتدا وارد حساب کاربری خود شوید");
    return Promise.reject(error);
  }
  if(error.response.status === 403) {
    localStorage.removeItem("authToken")
    toast.warn("لطفاً مجدداً وارد حساب کاربری خود شوید");
    return Promise.reject(error);
  }
});

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();