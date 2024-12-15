//? este es nuestro store
//? es nuestro redux que se va a encargar de 
//? compartir informacion a todo nuestros
//? componentes, estamos creeando nuestro store
import { configureStore } from '@reduxjs/toolkit'
import  {counterSlice}  from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemons/pokemonSlice'
import { todoApi } from './api/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon:pokemonSlice.reducer,

    //?propiedades computadas
    [todoApi.reducerPath]:todoApi.reducer

    //? utilizar nues RTK QUERY 
  },
  //? un middleware es una funcion que se ejecuta antes de otra
  middleware:(getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todoApi.middleware),
})