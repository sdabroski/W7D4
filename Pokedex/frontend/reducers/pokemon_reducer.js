import {RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge'; 

const pokemonReducer = (state = {}, action) => {
  // Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      
      return merge({}, state, action.pokemons)
    case RECEIVE_ONE_POKEMON:
      return merge({}, state, action.payload.pokemon)
    default: 
      return state
  }
}

export default pokemonReducer;