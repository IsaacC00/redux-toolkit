//? un slice es una funcon que recibe como parametros
//? un objeto , un valor inicial y un nombre
//? una ventaja de trabajar con redux 
//? es que ele state no muta
//? redux se encarga de crear un nuevo state sin mutar 
//? el anterior state

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      //? recibimos un action
      //? porque en ello vamos a recibir
      //? cuanto qeueremos incrementar el state
      //? 2 en 2, 3 en 3, etc
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

