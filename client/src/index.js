import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// import reducer from './reducers';
import thunk from 'redux-thunk';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
