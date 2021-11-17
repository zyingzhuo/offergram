import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import EditProductFormProvider from './context/EditProductContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EditProductFormProvider>
        <App />
      </EditProductFormProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
