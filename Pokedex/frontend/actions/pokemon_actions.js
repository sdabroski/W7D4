import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON"

export const receiveAllPokemon = pokemons => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons 
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemon(pokemons)))
)

export const receiveOnePokemon = payload => ({
  type: RECEIVE_ONE_POKEMON,
  payload
})

export const requestSinglePokemon = (pokeId) => (dispatch) => (
  APIUtil.fetchOnePokemon()
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
)