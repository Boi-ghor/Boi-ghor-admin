import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'antd/dist/reset.css';
import { Provider } from 'react-redux'
import store from './store'
import {AuthProvider} from './components/context/auth'
import {CategoryProvider}from './components/context/category'
import {PublisherProvider}from './components/context/publisher'
import {AuthorProvider}from './components/context/author'
import {ToastContainer} from "react-toastify";
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AuthProvider>
    <CategoryProvider>
     <PublisherProvider>
       <AuthorProvider>

    <App />

       </AuthorProvider>
     </PublisherProvider>
    </CategoryProvider>
  </AuthProvider>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
