import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
import configureStore from './store/store'
import {requestAllPokemon} from './actions/pokemon_actions'
import {selectAllPokemon} from '../frontend/reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

const store = configureStore();

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.getState = store.getState;
window.dispatch = store.dispatch;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
