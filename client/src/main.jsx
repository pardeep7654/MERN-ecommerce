import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {Toaster} from "./components/ui/toaster.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  <Toaster/>
  </Provider>
  </BrowserRouter>
    
)
