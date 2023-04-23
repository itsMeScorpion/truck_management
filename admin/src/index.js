import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(composeEnhancer(applyMiddleware(thunk)));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
