import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Store } from './reduxtool/store.js'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
