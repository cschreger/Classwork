export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
import * as APIUtil from '../util/api_util'

export const receiveAllPokemon = pokemon => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon: pokemon
    }
}

export const receivePokemon = onePokemon => {
    return {
        type: RECEIVE_POKEMON,
        onePokemon
    }
}

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = () => (dispatch) => (
    APIUtil.fetchPokemon()
    .then(onePokemon => dispatch(receivePokemon(onePokemon)))
)
