import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
////import { configureStore } from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom';

//import authReducer from './store/authSlice' 
import store from './store/store'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
