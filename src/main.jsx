import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/' 
import './index.css'
import { PokemonApp } from './PokemonApp.jsx'
import { ToDoApp } from './ToDoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    {/* <PokemonApp/> */}
    <ToDoApp/>
    </Provider>
  </StrictMode>,
)