import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemons/thunks";
import { useEffect } from "react";

export const PokemonApp = () => {

    const { isLoading, pokemon=[], currentPage} = useSelector(state => state.pokemon)

    console.log(
        currentPage
    );
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>
                {isLoading ? 'True' : 'False'}
            </span>
            <ul>
                {
                    pokemon.map(
                        poke => (
                            <li key={poke.url}>{poke.name}</li>
                        )
                    )
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => { dispatch( getPokemons(currentPage + 1) ) }}
            >
                New's Pokemon
            </button>
        </>
    )
}
