/* eslint-disable no-case-declarations */
import { createStore } from 'redux';

const initialState = {
    todos: [],
    nextId: 1
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = { id: state.nextId, title: action.payload.title }; 
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo)
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
