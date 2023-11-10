import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './context/ProductContext.jsx'
import { FilterContextProvider } from './context/FilterContex.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppContextProvider>
        <FilterContextProvider>
        <Provider store={store}>
              <App />
          </Provider>
        </FilterContextProvider>  
      </AppContextProvider>
  </React.StrictMode>,
)
