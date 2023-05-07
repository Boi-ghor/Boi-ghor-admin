import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/reset.css';
import { Provider } from 'react-redux'
import store from './store'
import {AuthProvider} from './components/context/auth'
import {CategoryProvider}from './components/context/category'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AuthProvider>
    <CategoryProvider>
    <App />
    </CategoryProvider>
  </AuthProvider>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
