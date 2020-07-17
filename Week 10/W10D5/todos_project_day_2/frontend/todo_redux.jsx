import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store';
import { receiveTodo, receiveTodos } from "./actions/todo_actions"
import App from './components/app'
import allTodos from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')

    ReactDOM.render(<Root store={store}/>, root);
});

window.store = store;
// window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
