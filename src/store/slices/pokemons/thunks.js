//? que es un thunks es una funciones 
//? que despachan ptra accion de manera asincrona
//? basicamente nuestras funciones asincronas

import { pokemonApi } from "../../../api/poekmosnApi";
import { startingLoadingPokemons, setPokemons } from "./pokemonSlice"

export const getPokemons = (currentPage = 0 ) => {
    return async(dispatch , getState) => {
        dispatch( startingLoadingPokemons() );
        //TODO: realizar la peticion https
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${currentPage * 10}`);
        
        dispatch( setPokemons( {pokemons:data.results , currentPage: currentPage= currentPage + 1,  } ) );
    }
}
