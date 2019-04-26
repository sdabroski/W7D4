import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import {configureStore} from './store/store.js';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  
  // window.receiveAllPokemon = receiveAllPokemon;
  window.store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon

  
  ReactDOM.render(<Root store={store}/>, rootEl);
});