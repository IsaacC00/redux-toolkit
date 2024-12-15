import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        currentPage: 0,
        pokemon: [],
        isLoading: false,
    },
    reducers: {
        startingLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },

        setPokemons: (state , action ) => {
            state.isLoading = false;
            state.currentPage - action.payload.currentPage;
            state.pokemon = action.payload.pokemons;
            
        }
    }
});
export const { startingLoadingPokemons, setPokemons } = pokemonSlice.actions;