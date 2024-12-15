import axios from "axios";

//? utilizamos axios para la creacion de una url estatica
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});